const SMS_MESSAGE_RATE_KEY = 'tymly_govUkSmsMessageRate'
const EXTENDED_GSM_CHARACTERS = '[]{}^\\|~€'
const ACCENTED_CHARACTERS = 'ÂÁÀÊÈËÎÍÌÏÔÓÒÛÚÙŴẂẀẄŶÝỲŸâáêëîíïôóûúŵẃẁẅŷýỳÿ'

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
  /*
  https://en.wikipedia.org/wiki/GSM_03.38
  https://www.notifications.service.gov.uk/pricing
  */

  const characterCount = countCharacters(message)
  const hasAccentedCharacters = ACCENTED_CHARACTERS.split('').filter(char => message.includes(char))

  if (hasAccentedCharacters.length > 0) {
    if (characterCount <= 70) {
      return 1
    }

    return Math.ceil(parseFloat(characterCount) / 67)
  }

  if (characterCount <= 160) {
    return 1
  }

  return Math.ceil(parseFloat(characterCount) / 153)
}

function countCharacters (message) {
  let count = message.length

  // EXTENDED_GSM_CHARACTERS count as 2
  for (const char of message.split('')) {
    if (EXTENDED_GSM_CHARACTERS.includes(char)) {
      count++
    }
  }

  return count
}
