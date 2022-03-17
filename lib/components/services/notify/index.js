const schema = require('./schema.json')
const MessageTemplate = require('./Message-template')

class NotifyService {
  boot (options) {
    this.notifyClient = {}

    this.templates = {}

    this.notificationModel = options.bootedServices.storage.models.tymly_govUkNotifications
    this.customTemplateModel = options.bootedServices.storage.models.tymly_govUkCustomTemplates

    if (options.blueprintComponents.messageTemplates) {
      for (const [key, definition] of Object.entries(options.blueprintComponents.messageTemplates)) {
        this.templates[key] = new MessageTemplate(
          definition,
          this,
          options.bootedServices.registry
        )
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

  async createCustomMessageTemplate ({ templateName, messageType, subject, message }) {
    const { idProperties } = await this.customTemplateModel.create({
      templateName,
      messageType,
      subject,
      message
    })
    return idProperties.id
  }
}

module.exports = {
  schema,
  serviceClass: NotifyService,
  bootBefore: ['statebox'],
  bootAfter: ['registry']
}
