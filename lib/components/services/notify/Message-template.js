const NotifyClient = require('notifications-node-client').NotifyClient

class MessageTemplate {
  constructor (definition, service, registry) {
    this.templateId = definition.templateId
    this.templateName = definition.name
    this.label = definition.label || this.templateName
    this.description = definition.description || this.templateName
    this.blueprint = definition.blueprintName
    this.namespace = definition.namespace
    this.isCustomTemplate = definition.custom === true
    this.availableEvents = new Set()

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

    this.messageType = definition.messageType
    this.requiredInput = definition.required || []

    if (this.isCustomTemplate) {
      if (this.messageType === 'mail') {
        this.requiredInput.push('subject')
      }

      this.requiredInput.push('message')
    }

    if (!service.notifyClient[clientId]) {
      service.notifyClient[clientId] = new NotifyClient(apiKey)

      if (process.env.PROXY_URL) {
        // TODO: Need to update to object https://docs.notifications.service.gov.uk/node.html#connect-through-a-proxy-optional
        service.notifyClient[clientId].setProxy(process.env.PROXY_URL)
      }
    }

    this.notifyClient = service.notifyClient[clientId]

    this.notificationModel = service.notificationModel
    this.customTemplateModel = service.customTemplateModel
  }

  async sendMessage (input, customTemplateId) {
    input = Array.isArray(input) ? input : [input]

    if (this.isCustomTemplate) {
      const customTemplate = await this.customTemplateModel.findById(customTemplateId)

      input.forEach(_input => {
        if (customTemplate.messageType === 'sms') {
          _input.phoneNumber = _input.recipient || _input.phoneNumber
        }
        if (customTemplate.messageType === 'mail') {
          _input.emailAddress = _input.recipient || _input.emailAddress
        }

        _input.subject = customTemplate.subject
        _input.message = customTemplate.message

        if (_input.parameters) {
          for (const [k, v] of Object.entries(_input.parameters)) {
            const regex = new RegExp(`\\(\\(\\s*${k}\\s*\\)\\)`, 'g')
            _input.subject = _input.subject.replace(regex, v)
            _input.message = _input.message.replace(regex, v)
          }
        }
      })
    }

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
        namespace: this.namespace,
        customTemplateId
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

  registerNotifyEvent (event) {
    this.availableEvents.add(event)
  }
}

module.exports = MessageTemplate
