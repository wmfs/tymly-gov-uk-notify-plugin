module.exports = class SendingCustomMessageViaService {
  init (stateConfig, options) {
    this.notify = options.bootedServices.notify
  }

  async run (event, context) {
    const {
      recipients,
      templateName,
      customTemplateId
    } = event

    try {
      const sent = await this.notify.templates[templateName].sendMessage(recipients, customTemplateId)
      return context.sendTaskSuccess({ sent })
    } catch (e) {
      return context.sendTaskFailure({ error: 'SEND_MESSAGE_FAIL', cause: e.message })
    }
  }
}
