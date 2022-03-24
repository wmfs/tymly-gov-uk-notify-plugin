module.exports = class ListCustomTemplateRecipients {
  init (stateConfig, options) {
    this.notify = options.bootedServices.notify
    this.recipientModel = options.bootedServices.storage.models.tymly_govUkCustomTemplateRecipients
  }

  async run (customTemplateId, context) {
    const recipients = await this.recipientModel.find({
      where: {
        customTemplateId: {
          equals: customTemplateId
        }
      },
      fields: [
        'recipient'
      ]
    })

    recipients.forEach(r => {
      r.launches = [
        // {
        //   title: 'Edit',
        //   stateMachineName: 'tymly_addGovUkCustomTemplateRecipient_1_0',
        //   input: {
        //     recipientId: r.id,
        //     customTemplateId: customTemplateId,
        //     emailAddress: r.emailAddress,
        //     phoneNumber: r.phoneNumber
        //   }
        // },
        {
          title: 'Remove',
          stateMachineName: 'tymly_removeGovUkCustomTemplateRecipient_1_0',
          input: {
            recipient: r.recipient,
            customTemplateId
          }
        }
      ]
    })

    return context.sendTaskSuccess(recipients)
  }
}
