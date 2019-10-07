module.exports = class SendingMessageViaService {
  /**
   * Initialize required variables for SendingMessageViaService
   * @param {Object} stateConfig
   * @param {Object} options
   * @param {Function} callback
   */
  init (stateConfig, options, callback) {
    this.notify = options.bootedServices.notify
    this.template = this.notify.templates[stateConfig.messageTemplateId]

    if (this.template) {
      callback(null)
    } else {
      callback(new Error(`No message template with id: ${stateConfig.messageTemplateId}`))
    }
  }

  /**
 * Sends a message via the gov-uk-notify service
 * @param {Object} event The event of the current Tymly execution
 * @param {Object} context The current Tymly context object
 * @example
 * const executionDescription = await statebox.startExecution(
 {
        phoneNumber: '07700900003',
        name: 'Robert'
      },
 SEND_SMS_STATE_MACHINE_NAME,
 {
        sendResponse: 'COMPLETE'
      }
 )
 * */
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
