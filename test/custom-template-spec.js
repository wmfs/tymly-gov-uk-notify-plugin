/* eslint-env mocha */

const expect = require('chai').expect
const tymly = require('@wmfs/tymly')
const process = require('process')
const { pluginPaths, blueprintPaths } = require('./fixtures/tymly-paths')

describe('Custom template tests', function () {
  this.timeout(process.env.TIMEOUT || 15000)

  const templateName = 'test_customMail'
  const messageType = 'mail'
  const subject = 'Hello world'
  const message = 'Today will be sunny with some clouds'

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
      templateName,
      messageType,
      subject,
      message
    })

    const customTemplates = await customTemplateModel.find({})
    expect(customTemplates.length).to.eql(1)
  })

  it('send custom message', async () => {
    const notifications = await notify.templates[templateName].sendMessage(
      {
        emailAddress: 'perm-fail@simulator.notify'
      },
      customTemplateId
    )
    expect(notifications.length).to.eql(1)
    expect(notifications[0].statusCode).to.eql(201)
  })

  it('should shutdown Tymly', async () => {
    await tymlyService.shutdown()
  })
})
