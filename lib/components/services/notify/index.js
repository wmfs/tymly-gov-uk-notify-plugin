const schema = require('./schema.json')
const MessageTemplate = require('./Message-template')

class NotifyService {
  boot (options) {
    this.notifyClient = {}

    this.templates = {}

    const notificationModel = options.bootedServices.storage.models.tymly_govUkNotifications

    if (options.blueprintComponents.messageTemplates) {
      for (const [key, definition] of Object.entries(options.blueprintComponents.messageTemplates)) {
        this.templates[key] = new MessageTemplate(definition, this, options.bootedServices.registry, notificationModel)
      }
    }
  } // boot

  listCustomMessageTemplates (options = {}) {
    const templates = []

    const {
      format = 'array'
    } = options

    for (const [key, config] of Object.entries(this.templates)) {
      if (!config.isCustomTemplate) continue

      templates.push({
        // todo: label/description
        key,
        messageType: config.messageType,
        requiredInput: config.requiredInput,
        restrictions: config.restrictions,
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
}

module.exports = {
  schema,
  serviceClass: NotifyService,
  bootBefore: ['statebox'],
  bootAfter: ['registry']
}
