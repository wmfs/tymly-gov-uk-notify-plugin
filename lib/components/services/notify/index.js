const schema = require('./schema.json')
const MessageTemplate = require('./Message-template')

class NotifyService {
  boot (options) {
    this.notificationModel = options.bootedServices.storage.models.tymly_govUkNotifications
    this.customTemplateModel = options.bootedServices.storage.models.tymly_govUkCustomTemplates
    this.recipientModel = options.bootedServices.storage.models.tymly_govUkCustomTemplateRecipients

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

module.exports = {
  schema,
  serviceClass: NotifyService,
  bootBefore: ['statebox'],
  bootAfter: ['registry']
}
