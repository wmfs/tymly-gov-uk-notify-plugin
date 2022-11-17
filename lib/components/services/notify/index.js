const schema = require('./schema.json')
const MessageTemplate = require('./Message-template')

const moment = require('moment')

class NotifyService {
  boot (options) {
    this.notificationModel = options.bootedServices.storage.models.tymly_govUkNotifications
    this.customTemplateModel = options.bootedServices.storage.models.tymly_govUkCustomTemplates
    this.sendConfigModel = options.bootedServices.storage.models.tymly_customTemplateSendConfig
    this.recipientModel = options.bootedServices.storage.models.tymly_govUkCustomTemplateRecipients
    this.scheduleService = options.bootedServices.schedule
    this.notifyClient = {}
    this.templates = {}
    this.events = {}

    if (options.blueprintComponents.messageTemplates) {
      for (const [key, definition] of Object.entries(options.blueprintComponents.messageTemplates)) {
        this.templates[key] = new MessageTemplate(
          definition,
          this,
          options.bootedServices.registry
        )
      }
    }

    if (options.blueprintComponents.notifyEvents) {
      for (const [key, definition] of Object.entries(options.blueprintComponents.notifyEvents)) {
        if (!Array.isArray(definition.customTemplates)) {
          continue
        }

        const event = {
          key,
          title: definition.title,
          description: definition.description,
          customTemplates: []
        }

        for (const templateKey of definition.customTemplates) {
          if (!this.templates[templateKey]) {
            continue
          }

          this.templates[templateKey].registerNotifyEvent(key)
          event.customTemplates.push(templateKey)
        }

        if (event.customTemplates.length > 0) {
          this.events[key] = event
        }
      }
    }
  } // boot

  async emitNotifyEvents (eventNames = [], parameters = {}, recipientsFromStateMachine = []) {
    if (!Array.isArray(eventNames)) {
      console.log('EmitNotifyEvents: eventNames must be an array of strings')
      return
    }

    const sent = []

    for (const eventName of eventNames) {
      const event = this.events[eventName]

      if (!event) {
        console.log(`EmitNotifyEvents: Cannot find event '${eventName}'`)
        continue
      }

      for (const templateName of event.customTemplates) {
        const template = this.templates[templateName]

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

        for (const { id: customTemplateId } of customTemplatesFilt) {
          const recipientsFromDatabase = await this.listCustomTemplateRecipients(customTemplateId)

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
              // datetime = moment().add(sendConfig[0].offsetLength, 'hours').toDate()
              // Below line used during dev to make delay only 20 seconds
              datetime = moment().add('20', 'seconds').toDate()
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

            const taskResponse = await this.scheduleService.createScheduledTask(null, config)
            await this.scheduleService.startTask(taskResponse.idProperties.key)
          } else {
            try {
              const _sent = await this.templates[templateName].sendMessage(recipients, customTemplateId)
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

    return { sent }
  }

  listMessageTemplates (options = {}) {
    const templates = []

    const {
      format = 'array',
      customOnly = false
    } = options

    for (const [key, config] of Object.entries(this.templates)) {
      if (customOnly === true && !config.isCustomTemplate) {
        continue
      }

      templates.push({
        key,
        label: config.label,
        description: config.description,
        messageType: config.messageType,
        requiredInput: config.requiredInput,
        templateId: config.templateId
      })
    }

    return format === 'array'
      ? templates
      : templates.reduce((acc, curr) => {
        acc[curr.key] = curr
        return acc
      }, {})
  }

  async createCustomMessageTemplate ({ templateName, messageType, subject, message, name, sendOnEvents }) {
    const { idProperties } = await this.customTemplateModel.create({
      name,
      messageType,
      subject,
      message,
      templateName,
      status: 'DRAFT',
      sendOnEvents
    })
    return idProperties.id
  }

  async editCustomMessageTemplate ({ status, messageType, subject, message, templateName, id, name }) {
    await this.customTemplateModel.update({
      name,
      status,
      messageType,
      subject,
      message,
      templateName,
      id
    }, { setMissingPropertiesToNull: false })
    return id
  }

  deleteCustomMessageTemplate (id) {
    return this.customTemplateModel.destroyById(id)
  }

  async listCustomTemplateRecipients (customTemplateId) {
    const recipients = await this.recipientModel.find({
      where: {
        customTemplateId: {
          equals: customTemplateId
        }
      },
      fields: [
        'recipient'
      ]
    })

    recipients.forEach(r => {
      r.launches = [
        // {
        //   title: 'Edit',
        //   stateMachineName: 'tymly_addGovUkCustomTemplateRecipient_1_0',
        //   input: {
        //     recipientId: r.id,
        //     customTemplateId: customTemplateId,
        //     emailAddress: r.emailAddress,
        //     phoneNumber: r.phoneNumber
        //   }
        // },
        {
          title: 'Remove',
          stateMachineName: 'tymly_removeGovUkCustomTemplateRecipient_1_0',
          input: {
            recipient: r.recipient,
            customTemplateId
          }
        }
      ]
    })

    return recipients
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

module.exports = {
  schema,
  serviceClass: NotifyService,
  bootBefore: ['statebox'],
  bootAfter: ['registry', 'schedule']
}
