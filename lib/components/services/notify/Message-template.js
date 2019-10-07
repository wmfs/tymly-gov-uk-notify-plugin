class MessageTemplate {
  constructor (definition, service) {
    this.templateId = definition.templateId
    this.requiredInput = definition.required || []
    this.messageType = definition.messageType
    this.notifyClient = service.notifyClient
  }

  async sendMessage (input) {
    input = Array.isArray(input) ? input : [input]

    const sent = []
    const errors = []

    for (const i of input) {
      const parsedInput = this.parseInput(i)

      const fn = this.messageType === 'mail' ? 'sendEmail' : 'sendSms'
      const recipient = this.getRecipient(i)

      try {
        const response = await this.notifyClient[fn](this.templateId, recipient, parsedInput)

        if (response.statusCode === 201) sent.push(response.body)
        else errors.push(recipient)
      } catch (e) {
        throw new Error(`${e.statusCode} - ${e.error.errors.map(x => x.message).join(',')}`)
      }
    }

    if (errors.length > 0) {
      throw new Error(`Failed to send messages to the following: ${errors.join(',')}`)
    } else {
      return sent
    }
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
        throw new Error(`No email address provided`)
      }
    } else if (this.messageType === 'sms') {
      if (input.phoneNumber) {
        return input.phoneNumber
      } else {
        throw new Error(`No phone number provided`)
      }
    }
  }
}

module.exports = MessageTemplate
