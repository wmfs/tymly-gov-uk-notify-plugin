module.exports = class DeleteCustomMessageTemplate {
  init (stateConfig, options) {
    this.notify = options.bootedServices.notify
  }

  async run (event, context) {
    await this.notify.deleteCustomMessageTemplate(event)

    return context.sendTaskSuccess({})
  }
}
