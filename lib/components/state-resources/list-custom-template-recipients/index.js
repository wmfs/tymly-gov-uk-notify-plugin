module.exports = class ListCustomTemplateRecipients {
  init (stateConfig, options) {
    this.notify = options.bootedServices.notify
    this.recipientModel = options.bootedServices.storage.models.tymly_govUkCustomTemplateRecipients
  }

  async run (customTemplateId, context) {
    const recipients = await this.notify.listCustomTemplateRecipients(customTemplateId)
    return context.sendTaskSuccess(recipients)
  }
}
