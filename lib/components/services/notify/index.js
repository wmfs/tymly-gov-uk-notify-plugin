const schema = require('./schema.json')
const MessageTemplate = require('./Message-template')

class NotifyService {
  boot (options) {
    this.notifyClient = {}

    this.templates = {}

    const notificationModel = options.bootedServices.storage.models.notify_notifications

    if (options.blueprintComponents.messageTemplates) {
      for (const [key, definition] of Object.entries(options.blueprintComponents.messageTemplates)) {
        this.templates[key] = new MessageTemplate(definition, this, options.bootedServices.registry, notificationModel)
      }
    }
  } // boot
}

module.exports = {
  schema,
  serviceClass: NotifyService,
  bootBefore: ['statebox'],
  bootAfter: ['registry']
}
