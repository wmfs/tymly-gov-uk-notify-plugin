const schema = require('./schema.json')
const MessageTemplate = require('./Message-template')
const NotifyClient = require('notifications-node-client').NotifyClient

class NotifyService {
  boot (options, callback) {
    this.notifyClient = process.env.GOV_UK_NOTIFY_API_KEY && new NotifyClient(process.env.GOV_UK_NOTIFY_API_KEY)
    if (this.notifyClient && process.env.PROXY_URL) this.notifyClient.setProxy(process.env.PROXY_URL)

    this.templates = {}

    for (const [key, definition] of Object.entries(options.blueprintComponents.messageTemplates)) {
      this.templates[key] = new MessageTemplate(definition, this)
    }

    callback(null)
  } // boot
}

module.exports = {
  schema,
  serviceClass: NotifyService,
  bootBefore: ['statebox']
}
