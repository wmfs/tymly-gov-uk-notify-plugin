module.exports = class ListMessageTemplates {
  init (stateConfig, options) {
    this.notify = options.bootedServices.notify

    this.format = stateConfig.format
    this.customOnly = stateConfig.customOnly
  }

  async run (event, context) {
    const options = {
      format: this.format,
      customOnly: this.customOnly
    }
    const templates = this.notify.listMessageTemplates(options)
    return context.sendTaskSuccess(templates)
  }
}
