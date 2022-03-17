module.exports = class CreateCustomMessageTemplate {
  init (stateConfig, options) {
    this.notify = options.bootedServices.notify

    this.smsTemplateName = stateConfig.smsTemplateName
    this.mailTemplateName = stateConfig.mailTemplateName

    for (const t of ['smsTemplateName', 'mailTemplateName']) {
      const templateName = this[t]
      const template = this.notify.templates[templateName]

      if (!template) {
        throw new Error(`${t} '${templateName}' does not exist`)
      }

      if (template.isCustomTemplate === true) {
        throw new Error(`${t} '${templateName}' is not a custom template`)
      }
    }
  }

  async run (event, context) {
    const {
      messageType,
      subject,
      message
    } = event

    if (messageType !== 'sms' || messageType !== 'mail') {
      return context.sendTaskFailure({ error: 'UNKNOWN_MESSAGE_TYPE', cause: 'Message type should be sms or mail' })
    }

    if (messageType === 'sms' && (typeof subject !== 'string' || subject.trim().length === 0)) {
      return context.sendTaskFailure({ error: 'CUSTOM_MESSAGE_SUBJECT_ERROR', cause: 'Subject must be a string' })
    }

    if (typeof message !== 'string' || message.trim().length === 0) {
      return context.sendTaskFailure({ error: 'CUSTOM_MESSAGE_MESSAGE_ERROR', cause: 'Message must be a string' })
    }

    const templateName = messageType === 'sms'
      ? this.smsTemplateName
      : this.mailTemplateName

    await this.notify.createCustomMessageTemplate({ templateName, messageType, subject, message })

    return context.sendTaskSuccess({})
  }
}
