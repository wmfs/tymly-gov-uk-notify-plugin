const resolveInputPaths = require('@wmfs/json-path-input-resolver')
const moment = require('moment')

module.exports = class EmitNotifyEvents {
  init (stateConfig, options) {
    this.eventNames = stateConfig.eventNames || []
    this.parameters = stateConfig.parameters || {}
    this.recipients = stateConfig.recipients || []
    this.notify = options.bootedServices.notify
    this.services = options.bootedServices
    this.customTemplateModel = options.bootedServices.storage.models.tymly_govUkCustomTemplates
    this.sendConfigModel = options.bootedServices.storage.models.tymly_customTemplateSendConfig
  }

  async run (event, context) {
    if (!Array.isArray(this.eventNames)) {
      return context.sendTaskFailure({
        error: 'EMIT_NOTIFY_EVENT_FAIL',
        cause: 'eventNames must be an array of strings in the resource config'
      })
    }

    const parameters = resolveInputPaths(event, this.parameters)
    const recipientsFromStateMachine = resolveInputPaths(event, this.recipients)

    const sent = []

    for (const eventName of this.eventNames) {
      const event = this.notify.events[eventName]

      if (!event) {
        console.log(`EmitNotifyEvents: Cannot find event '${eventName}'`)
        continue
      }

      for (const templateName of event.customTemplates) {
        const template = this.notify.templates[templateName]

        if (!template) {
          console.log(`EmitNotifyEvents: Cannot find template '${templateName}'`)
          continue
        }

        const customTemplates = await this.customTemplateModel.find({
          where: {
            templateName: {
              equals: templateName
            }
          },
          fields: ['sendOnEvents', 'id']
        })

        if (customTemplates.length === 0) {
          console.log(`EmitNotifyEvents: Cannot find custom templates '${templateName}'`)
          continue
        }

        const customTemplatesFilt = customTemplates.filter(t => Array.isArray(t.sendOnEvents) && t.sendOnEvents.includes(eventName))

        if (customTemplatesFilt.length === 0) {
          console.log(`EmitNotifyEvents: Cannot find custom templates '${templateName}' for event '${eventName}'`)
          continue
        }

        for (const customTemplate of customTemplatesFilt) {
          const customTemplateId = customTemplate.id

          const recipientsFromDatabase = await this.notify.listCustomTemplateRecipients(customTemplateId)

          const recipients = gatherRecipients(
            recipientsFromStateMachine,
            recipientsFromDatabase,
            parameters
          )

          if (recipients.length === 0) {
            console.log(`EmitNotifyEvents: Cannot find recipients for custom template '${customTemplateId}'`)
            continue
          }

          const sendConfig = await this.sendConfigModel.find({
            where: {
              customTemplateId: {
                equals: customTemplateId
              }
            }
          })

          if (sendConfig.length > 0 && sendConfig[0].offsetType) {
            const stateMachineName = 'tymly_sendGovUkScheduledCustomTemplate_1_0'

            let datetime

            if (sendConfig[0].offsetType === 'HRS') {
              console.log('offsetting by ', sendConfig[0].offsetLength, 'hours')
              datetime = moment().add(sendConfig[0].offsetLength, 'hours').toDate()
              // Below line used during dev to make delay only 20 seconds
              // datetime = moment().add('20', 'seconds').toDate()
            } else if (sendConfig[0].offsetType === 'DAYS') {
              console.log('offsetting by ', sendConfig[0].offsetLength, 'days')
              datetime = moment().add(sendConfig[0].offsetLength, 'days').toDate()
            }

            const config = {
              stateMachineName,
              input: {
                recipients,
                templateName,
                customTemplateId
              },
              sendResponse: 'COMPLETE',
              scheduleType: 'datetime',
              datetime,
              startOnBoot: false // todo
            }

            const taskResponse = await this.services.schedule.createScheduledTask(null, config)
            await this.services.schedule.startTask(taskResponse.idProperties.key)
          } else {
            try {
              const _sent = await this.notify.templates[templateName].sendMessage(recipients, customTemplateId)
              sent.push(_sent)
            } catch (e) {
              console.log('--------')
              console.log('Failed to send message')
              console.log(e)
              console.log('--------')
            }
          }
        }
      }
    }

    return context.sendTaskSuccess({ sent })
  }
}

function gatherRecipients (fromStateMachine, fromDatabase, parameters) {
  const recipients = []

  for (const recipient of fromStateMachine) {
    recipients.push({ recipient, parameters })
  }

  for (const { recipient } of fromDatabase) {
    recipients.push({ recipient, parameters })
  }

  return recipients
}
