'use strict'

const NotifyClient = require('notifications-node-client').NotifyClient

module.exports = class GetMessageStatusViaService {
  /**
   * Initialize required variables for GetMessageStatusViaService
   * @param {Object} stateConfig
   * @param {Object} options
   * @param {Function} callback
   */
  init (stateConfig, options, callback) {
    this.notifyClient = process.env.GOV_UK_NOTIFY_API_KEY && new NotifyClient(process.env.GOV_UK_NOTIFY_API_KEY)
    if (this.notifyClient && process.env.PROXY_URL) this.notifyClient.setProxy(process.env.PROXY_URL)
    callback(null)
  }

  /**
   * Executes a check to determine the current status of a message sent via gov-uk-notify-plugin
   * @param {Object} event The event of the current Tymly execution
   * @param {Object} context The current Tymly context object
   * @example
   * while (messageStatus === 'created' || messageStatus === 'sending') {
      await new Promise((resolve, reject) => {
        statebox.startExecution(
          { notificationId },
          GET_MESSAGE_STATUS_STATE_MACHINE_NAME,
          {
            sendResponse: 'COMPLETE'
          },
          (err, executionDescription) => {
            if (err) {
              reject(err)
            } else if (executionDescription.status === 'FAILED') {
              reject(new Error(executionDescription.errorCode))
            }
            messageStatus = executionDescription.ctx.message.status
            resolve()
          }
        )
      })
    }
   */
  run (event, context) {
    if (this.notifyClient) {
      this.notifyClient
        .getNotificationById(event.notificationId)
        .then(response => {
          if (response.statusCode === 200) {
            context.sendTaskSuccess({ message: response.body })
          } else {
            context.sendTaskFailure({
              cause: new Error(`${response.statusCode}: ${response.statusMessage}`),
              err: 'FAILED_TO_GET_MESSAGE_STATUS'
            })
          }
        })
        .catch(err => context.sendTaskFailure({ cause: err, error: 'FAILED_TO_GET_MESSAGE_STATUS' }))
    } else {
      context.sendTaskFailure({
        cause: new Error('missing env variable'),
        error: 'MISSING_GOV_UK_NOTIFY_API_KEY'
      })
    }
  }
}
