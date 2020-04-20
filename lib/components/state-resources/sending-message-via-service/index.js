module.exports = class SendingMessageViaService {
  /**
   * Initialize required variables for SendingMessageViaService
   * @param {Object} stateConfig
   * @param {Object} options
   * @param {Function} callback
   */
  init (stateConfig, options) {
    this.notify = options.bootedServices.notify
    this.template = this.notify.templates[stateConfig.messageTemplateId]

    if (!this.template) {
      throw new Error(`No message template with id: ${stateConfig.messageTemplateId}`)
    }
  }

  /**
   * Run state resource SendingMessageViaService
   * @param {Object} event The event of the current Tymly execution
   * @param {Object} context The current Tymly context object
   */
  async run (event, context) {
    try {
      const sent = await this.template.sendMessage(event)
      context.sendTaskSuccess({ sent })
    } catch (e) {
      context.sendTaskFailure({
        error: 'SEND_MESSAGE_FAIL',
        cause: e.message
      })
    }
  }
}
