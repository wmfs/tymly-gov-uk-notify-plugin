const NotifyClient = require('notifications-node-client').NotifyClient

class MessageTemplate {
  constructor (definition, service, registry, notificationModel) {
    this.templateId = definition.templateId
    this.templateName = definition.name
    this.blueprint = definition.blueprintName
    this.namespace = definition.namespace

    if (!this.templateId) throw new Error('Message template missing templateId')

    const clientId = definition.registryLookupApiKey

    if (!clientId) throw new Error(`Message template ${this.templateId} is missing registryLookupApiKey.`)

    let apiKey

    try {
      apiKey = registry.get(clientId)
    } catch (err) {
      throw new Error(`Failed to get API KEY for ${clientId} in ${this.templateId}. ${err}`)
    }

    if (!apiKey) throw new Error(`Message template ${this.templateId} is missing API KEY for ${clientId}.`)

    this.requiredInput = definition.required || []
    this.messageType = definition.messageType

    if (!service.notifyClient[clientId]) {
      service.notifyClient[clientId] = new NotifyClient(apiKey)

      if (process.env.PROXY_URL) {
        // TODO: Need to update to object https://docs.notifications.service.gov.uk/node.html#connect-through-a-proxy-optional
        service.notifyClient[clientId].setProxy(process.env.PROXY_URL)
      }
    }

    this.notifyClient = service.notifyClient[clientId]
    this.notificationModel = notificationModel
  }

  async sendMessage (input) {
    input = Array.isArray(input) ? input : [input]

    const notifications = []

    for (const i of input) {
      const parsedInput = this.parseInput(i)

      const fn = this.messageType === 'mail' ? 'sendEmail' : 'sendSms'
      const recipient = this.getRecipient(i)

      const notif = {
        input: i,
        template: this.templateId,
        blueprint: this.blueprint,
        templateName: this.templateName,
        recipient,
        notifyId: null,
        error: null,
        statusCode: null,
        namespace: this.namespace
      }

      try {
        const response = await this.notifyClient[fn](this.templateId, recipient, parsedInput)
        notif.notifyId = response.data.id
        notif.statusCode = response.status
      } catch (e) {
        notif.statusCode = e.response.status
        notif.error = `${e.response.status} - ${e.response.data.errors.map(x => x.message).join(',')}`
      }

      notifications.push(notif)
      await this.notificationModel.create(notif)
    }

    return notifications
  }

  parseInput (input) {
    const parsedInput = { personalisation: {} }

    for (const required of this.requiredInput) {
      if (input[required]) {
        parsedInput.personalisation[required] = input[required]
      } else {
        throw new Error(`Missing input: ${required}`)
      }
    }

    return parsedInput
  }

  getRecipient (input) {
    if (this.messageType === 'mail') {
      if (input.emailAddress) {
        return input.emailAddress
      } else {
        throw new Error('No email address provided')
      }
    } else if (this.messageType === 'sms') {
      if (input.phoneNumber) {
        return input.phoneNumber
      } else {
        throw new Error('No phone number provided')
      }
    }
  }
}

module.exports = MessageTemplate
