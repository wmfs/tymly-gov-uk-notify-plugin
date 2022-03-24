module.exports = function upsertGovUkRecipients () {
  return async function (event, env) {
    const recipientModel = env.bootedServices.storage.models.tymly_govUkCustomTemplateRecipients

    const { customTemplateId, importLog } = event

    await Promise.all(
      importLog.rows.map(recipient => recipientModel.upsert({ customTemplateId, recipient }, { setMissingPropertiesToNull: false }))
    )

    return event
  }
}
