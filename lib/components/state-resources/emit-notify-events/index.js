const resolveInputPaths = require('@wmfs/json-path-input-resolver')

module.exports = class EmitNotifyEvents {
  init (stateConfig, options) {
    this.eventNames = stateConfig.eventNames || []
    this.parameters = stateConfig.parameters || {}
    this.notify = options.bootedServices.notify
    this.customTemplateModel = options.bootedServices.storage.models.tymly_govUkCustomTemplates
  }

  async run (event, context) {
    if (!Array.isArray(this.eventNames)) {
      return context.sendTaskFailure({
        error: 'EMIT_NOTIFY_EVENT_FAIL',
        cause: 'eventNames must be an array of strings in the resource config'
      })
    }

    const parameters = resolveInputPaths(event, this.parameters)

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

          // todo: recipients which are stored or recipient from event?
          const recipients = await this.notify.listCustomTemplateRecipients(customTemplateId)

          if (recipients.length === 0) {
            console.log(`EmitNotifyEvents: Cannot find recipients for custom template '${customTemplateId}'`)
            continue
          }

          recipients.forEach(r => {
            Object.entries(parameters).forEach(([k, v]) => {
              r[k] = v
            })
          })

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

    return context.sendTaskSuccess({ sent })
  }
}
