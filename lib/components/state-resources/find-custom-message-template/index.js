class FindCustomMessageTemplate {
  init (stateConfig, options) {
    this.customTemplateModel = options.bootedServices.storage.models.tymly_govUkCustomTemplates
    this.notify = options.bootedServices.notify
  }

  async run (customTemplateId, context) {
    const customTemplate = await this.customTemplateModel.findById(customTemplateId)

    const template = this.notify.templates[customTemplate.templateName]

    const parameters = Object.entries(template.parameters).map(([name, { description }]) => {
      return { name, description }
    })

    const availableEvents = [...template.availableEvents]
      .map(eventName => this.notify.events[eventName])
      .filter(event => event)

    return context.sendTaskSuccess({
      ...customTemplate,
      parameters,
      availableEvents
    })
  }
}

module.exports = FindCustomMessageTemplate
