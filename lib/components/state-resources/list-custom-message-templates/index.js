module.exports = class ListCustomMessageTemplates {
  init (stateConfig, options) {
    this.notify = options.bootedServices.notify
  }

  async run (event, context) {
    const templates = this.notify.listCustomMessageTemplates()
    return context.sendTaskSuccess(templates)
  }
}
