const resolveInputPaths = require('@wmfs/json-path-input-resolver')

module.exports = class EmitNotifyEvents {
  init (stateConfig, options) {
    this.eventNames = stateConfig.eventNames || []
    this.parameters = stateConfig.parameters || {}
    this.recipients = stateConfig.recipients || []
    this.notify = options.bootedServices.notify
  }

  async run (event, context) {
    const parameters = resolveInputPaths(event, this.parameters)
    const recipientsFromStateMachine = resolveInputPaths(event, this.recipients)

    const sent = await this.notify.emitNotifyEvents(
      this.eventNames,
      parameters,
      recipientsFromStateMachine
    )

    return context.sendTaskSuccess(sent)
  }
}
