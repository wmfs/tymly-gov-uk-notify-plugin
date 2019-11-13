module.exports = class GetMessageStatusViaService {
  /**
   * Initialize required variables for GetMessageStatusViaService
   * @param {Object} stateConfig
   * @param {Object} options
   * @param {Function} callback
   */
  init (stateConfig, options, callback) {
    const clientId = stateConfig.registryLookupApiKey

    if(!clientId) {
      callback(new Error(`State machine is missing ResourceConfig: registryLookupApiKey`))
    }

    this.notifyClient = options.bootedServices.notify.notifyClient[clientId]
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
  async run (event, context) {
    try {
      const response = await this.notifyClient.getNotificationById(event.notificationId)

      if (response.statusCode === 200) {
        context.sendTaskSuccess({ message: response.body })
      } else {
        context.sendTaskFailure({
          cause: new Error(`${response.statusCode}: ${response.statusMessage}`),
          err: 'FAILED_TO_GET_MESSAGE_STATUS'
        })
      }
    } catch (err) {
      context.sendTaskFailure({ cause: err, error: 'FAILED_TO_GET_MESSAGE_STATUS' })
    }
  }
}
