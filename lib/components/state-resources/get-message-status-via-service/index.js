module.exports = class GetMessageStatusViaService {
  /**
   * Initialize required variables for GetMessageStatusViaService
   * @param {Object} stateConfig
   * @param {Object} options
   * @param {Function} callback
   */
  init (stateConfig, options) {
    this.templates = options.bootedServices.notify.templates
  }

  /**
   * Run state resource GetMessageStatusViaService
   * @param {Object} event The event of the current Tymly execution
   * @param {Object} context The current Tymly context object
   */
  async run (event, context) {
    const { messageTemplateId, notificationId } = event

    let res = null

    if (messageTemplateId && notificationId) {
      const notifyClient = this.templates[messageTemplateId].notifyClient

      try {
        const response = await notifyClient.getNotificationById(notificationId)
        res = response.body
      } catch (e) {
        console.log('ERROR >>>', e)
      }
    }

    context.sendTaskSuccess(res)
  }
}
