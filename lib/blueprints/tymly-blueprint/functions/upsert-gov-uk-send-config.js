module.exports = function upsertGovUkSendConfig () {
  return async function (event, env) {
    const configModel = env.bootedServices.storage.models.tymly_customTemplateSendConfig

    const { id, sendOnEventsNew, offsetLength, offsetType } = event

    for (const event of sendOnEventsNew) {
      await configModel.upsert({ customTemplateId: id, event, offsetLength, offsetType }, {})
    }

    return event
  }
}
