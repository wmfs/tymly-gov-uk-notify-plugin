const SMS_MESSAGE_RATE_KEY = 'tymly_govUkSmsMessageRate'

module.exports = class CalculateMessageRates {
  init (stateConfig, options) {
    this.recipientModel = options.bootedServices.storage.models.tymly_govUkCustomTemplateRecipients
    this.notify = options.bootedServices.notify
    this.registry = options.bootedServices.registry
  }

  async run (event, context) {
    const {
      messageType,
      message,
      numRecipients
    } = event

    const smsMessageRatePence = Number(this.registry.get(SMS_MESSAGE_RATE_KEY) || 0)

    if (messageType === 'sms') {
      const numPages = countSmsPages(message)
      const totalMessages = numPages * numRecipients

      const totalCostPence = numPages * numRecipients * smsMessageRatePence
      const totalCostPounds = (totalCostPence / 100).toFixed(2)

      return context.sendTaskSuccess({ numPages, totalMessages, smsMessageRatePence, totalCostPounds })
    }

    return context.sendTaskSuccess({})
  }
}

function countSmsPages (message) {
  // todo: non GSM characters, etc https://en.wikipedia.org/wiki/GSM_03.38
  const characterCount = message.length

  if (characterCount <= 160) {
    return 1
  }

  return Math.ceil(parseFloat(characterCount) / 153)

  // todo: if non gsm characters then return 1 if character_count <= 70 else math.ceil(float(character_count) / 67)
}
