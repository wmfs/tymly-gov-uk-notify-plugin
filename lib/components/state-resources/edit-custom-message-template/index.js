module.exports = class EditCustomMessageTemplate {
  init (stateConfig, options) {
    this.notify = options.bootedServices.notify
  }

  async run (event, context) {
    const {
      status,
      messageType,
      subject,
      message,
      templateName,
      id
    } = event

    await this.notify.editCustomMessageTemplate({
      status,
      messageType,
      subject,
      message,
      templateName,
      id
    })

    return context.sendTaskSuccess({})
  }
}
