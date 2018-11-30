'use strict'

const NotifyClient = require('notifications-node-client').NotifyClient

module.exports = class SendingMessageViaService {
  init (stateConfig, options, callback) {
    this.notifyClient = process.env.GOV_UK_NOTIFY_API_KEY && new NotifyClient(process.env.GOV_UK_NOTIFY_API_KEY)
    if (this.notifyClient && process.env.PROXY_URL) this.notifyClient.setProxy(process.env.PROXY_URL)
    this.templateId = stateConfig.templateId
    this.messageType = stateConfig.messageType
    this.input = stateConfig.input
    callback(null)
  }

  async run (event, context) {
    if (!this.notifyClient) {
      return context.sendTaskFailure({
        cause: new Error('missing env variable'),
        error: 'MISSING_GOV_UK_NOTIFY_API_KEY'
      })
    }

    event = Array.isArray(event) ? event : [event]
    const sent = []
    const errors = []

    for (const e of event) {
      const input = { personalisation: {} }
      this.input && this.input.forEach(key => {
        if (e.hasOwnProperty(key)) {
          input.personalisation[key] = e[key]
        } else {
          return context.sendTaskFailure({
            error: 'MISSING_INPUT',
            cause: new Error(`Missing input: ${key}`)
          })
        }
      })

      if (this.messageType === 'mail' && e.emailAddress) {
        const { emailAddress } = e

        try {
          const response = await this.notifyClient.sendEmail(this.templateId, emailAddress, input)

          if (response.statusCode === 201) sent.push(response.body)
          else errors.push(emailAddress)
        } catch (e) {
          return context.sendTaskFailure({ cause: e, error: 'SEND_MAIL_FAIL' })
        }
      } else if (this.messageType === 'sms' && e.phoneNumber) {
        const { phoneNumber } = e

        try {
          const response = await this.notifyClient.sendSms(this.templateId, phoneNumber, input)

          if (response.statusCode === 201) sent.push(response.body)
          else errors.push(phoneNumber)
        } catch (e) {
          return context.sendTaskFailure({ cause: e, error: 'SEND_SMS_FAIL' })
        }
      } else if (!['sms', 'mail'].includes(this.messageType)) {
        return context.sendTaskFailure({
          error: 'INVALID_MESSAGE_TYPE',
          cause: new Error('message type must be sms or mail')
        })
      } else {
        return context.sendTaskFailure({
          error: 'NO_EMAIL_OR_PHONE_NUMBER',
          cause: new Error('no phone number or email address provided')
        })
      }
    }

    if (this.messageType === 'mail') {
      if (errors.length > 0) {
        context.sendTaskFailure({ cause: new Error(`Failed to create mail for following: ${errors.join(',')}.`), error: 'CREATE_MAIL_FAIL' })
      } else {
        context.sendTaskSuccess({ sentMail: sent })
      }
    } else if (this.messageType === 'sms') {
      if (errors.length > 0) {
        context.sendTaskFailure({ cause: new Error(`Failed to create sms for following: ${errors.join(',')}.`), error: 'CREATE_SMS_FAIL' })
      } else {
        context.sendTaskSuccess({ sentSms: sent })
      }
    }
  }
}
