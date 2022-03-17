module.exports = class CreateCustomMessageTemplate {
  init (stateConfig, options) {
    this.notify = options.bootedServices.notify

    this.smsTemplateName = stateConfig.smsTemplateName
    this.mailTemplateName = stateConfig.mailTemplateName

    // todo: check template names exist as CUSTOM message templates on notify service
  }

  async run (event, context) {
    const {
      messageType, // must be sms or mail
      subject, // must be string, required if sms
      message // must be string, required if mail
    } = event

    const templateName = messageType === 'sms' ? this.smsTemplateName : this.mailTemplateName

    await this.notify.createCustomMessageTemplate({ templateName, messageType, subject, message })
    return context.sendTaskSuccess({})
  }
}
