/* eslint-env mocha */

const expect = require('chai').expect
const tymly = require('@wmfs/tymly')
const process = require('process')
const { pluginPaths, blueprintPaths } = require('./fixtures/tymly-paths')

describe('Custom template tests', function () {
  this.timeout(process.env.TIMEOUT || 15000)

  const mailTemplateName = 'test_customMail'
  const mailMessageType = 'mail'
  const mailSubject = 'Hello world'
  const mailMessage = 'Today will be sunny with some clouds'

  const smsTemplateName = 'test_customSms'
  const smsMessageType = 'sms'
  const smsMessage = 'Hello world!! Will it be sunny today?'

  let tymlyService
  let notify
  let customTemplateModel
  let customTemplateId

  it('boot tymly', async () => {
    const tymlyServices = await tymly.boot(
      {
        pluginPaths,
        blueprintPaths,
        config: {}
      }
    )

    tymlyService = tymlyServices.tymly
    notify = tymlyServices.notify
    customTemplateModel = tymlyServices.storage.models.tymly_govUkCustomTemplates
  })

  it('create custom message template as mail', async () => {
    customTemplateId = await notify.createCustomMessageTemplate({
      templateName: mailTemplateName,
      messageType: mailMessageType,
      subject: mailSubject,
      message: mailMessage
    })

    const customTemplates = await customTemplateModel.find({})
    expect(customTemplates.length).to.eql(1)
  })

  it('send custom mail to one recipient', async () => {
    const notifications = await notify.templates[mailTemplateName].sendMessage(
      {
        emailAddress: 'perm-fail@simulator.notify'
      },
      customTemplateId
    )
    expect(notifications.length).to.eql(1)
    expect(notifications[0].statusCode).to.eql(201)
  })

  it('send custom mail to multiple recipients', async () => {
    const notifications = await notify.templates[mailTemplateName].sendMessage(
      [
        {
          emailAddress: 'perm-fail@simulator.notify'
        },
        {
          emailAddress: 'perm-fail@simulator.notify'
        }
      ],
      customTemplateId
    )
    expect(notifications.length).to.eql(2)
    expect(notifications[0].statusCode).to.eql(201)
    expect(notifications[1].statusCode).to.eql(201)
  })

  it('create custom message template as sms', async () => {
    customTemplateId = await notify.createCustomMessageTemplate({
      templateName: smsTemplateName,
      messageType: smsMessageType,
      message: smsMessage
    })

    const customTemplates = await customTemplateModel.find({})
    expect(customTemplates.length).to.eql(2)
  })

  it('should shutdown Tymly', async () => {
    await tymlyService.shutdown()
  })
})
