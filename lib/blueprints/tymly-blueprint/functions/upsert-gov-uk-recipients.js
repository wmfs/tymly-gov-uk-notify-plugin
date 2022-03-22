module.exports = function upsertGovUkRecipients () {
  return async function (event, env) {
    const recipientModel = env.bootedServices.storage.models.tymly_govUkCustomTemplateRecipients
    const { customTemplateId } = event
    const { messageType } = event.body
    const { rows } = event.importLog

    if (messageType === 'mail') {
      for (const row of rows) {
        await recipientModel.create({
          customTemplateId,
          emailAddress: row
        })
      }
    } else if (messageType === 'sms') {
      for (const row of rows) {
        await recipientModel.create({
          customTemplateId,
          phoneNumber: row
        })
      }
    }
    return event
  }
}
