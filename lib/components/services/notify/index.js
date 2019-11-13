const schema = require('./schema.json')
const MessageTemplate = require('./Message-template')

class NotifyService {
  boot (options, callback) {
    this.notifyClient = {}

    this.templates = {}

    for (const [key, definition] of Object.entries(options.blueprintComponents.messageTemplates)) {
      this.templates[key] = new MessageTemplate(definition, this, options.bootedServices.registry)
    }

    callback(null)
  } // boot
}

module.exports = {
  schema,
  serviceClass: NotifyService,
  bootBefore: ['statebox'],
  bootAfter: ['registry']
}
