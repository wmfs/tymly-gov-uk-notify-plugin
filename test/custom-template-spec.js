/* eslint-env mocha */

const expect = require('chai').expect
const tymly = require('@wmfs/tymly')
const process = require('process')
const { v1: uuid } = require('uuid')
const { pluginPaths, blueprintPaths } = require('./fixtures/tymly-paths')

const recipientsSelect = require('../lib/blueprints/tymly-blueprint/functions/process-gov-uk-recipients')()
const recipientsUpsert = require('../lib/blueprints/tymly-blueprint/functions/upsert-gov-uk-recipients')()
const path = require('path')

describe('Custom template tests', function () {
  this.timeout(process.env.TIMEOUT || 15000)

  const templateName = 'test_customMail'
  const messageTypeMail = 'mail'
  const messageTypeSms = 'sms'
  const subject = 'Hello world'
  const message = 'Today will be sunny with some clouds'
  const emailFileName = 'email-inputs-test.csv'
  const smsFileName = 'sms-inputs-test.csv'

  let tymlyService
  let notify
  let customTemplateModel
  let recipientModel
  let customTemplateId
  const event = {}

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
    recipientModel = tymlyServices.storage.models.tymly_govUkCustomTemplateRecipients
  })

  it('create custom message template as mail', async () => {
    customTemplateId = await notify.createCustomMessageTemplate({
      templateName,
      messageType: messageTypeMail,
      subject,
      message
    })

    const customTemplates = await customTemplateModel.find({})
    expect(customTemplates.length).to.eql(1)
    event.customTemplateId = customTemplateId
  })

  it('Select recipient file (mail)', async () => {
    event.body = {
      upload: {
        serverFilename: path.join(__dirname, 'fixtures', emailFileName),
        clientFilename: path.join(__dirname, 'fixtures', emailFileName)
      },
      messageType: messageTypeMail
    }
    event.importDirectory = path.join(__dirname, 'fixtures', 'output')
    event.importLogId = {
      id: uuid()
    }

    const result = await recipientsSelect(event)
    event.importLog = result

    expect(result.totalRows).to.eql(3)
    expect(result.rows).to.eql(['tymly@wmfs.net', 'test@test.com', 'test2@test.com'])
    expect(result.totalRejected).to.eql(2)
    expect(result.rejected).to.eql(['not an email', 'also not an email?'])

    // event.result = result
  })

  it('Upsert recipient file (mail)', async () => {
    await recipientsUpsert(event, tymlyService)
  })

  it('Check contacts imported properly', async () => {
    const recipients = await recipientModel.find({
      where: {
        customTemplateId: {
          equals: event.customTemplateId
        }
      }
    })

    expect(recipients.length).to.eql(3)
  })

  it('Select recipient file (sms)', async () => {
    event.body = {
      upload: {
        serverFilename: path.join(__dirname, 'fixtures', smsFileName),
        clientFilename: path.join(__dirname, 'fixtures', smsFileName)
      },
      messageType: messageTypeSms
    }
    event.importDirectory = path.join(__dirname, 'fixtures', 'output')
    event.importLogId = {
      id: uuid()
    }

    const result = await recipientsSelect(event)

    event.result = result
  })

  it('Upsert recipient file (sms)', async () => {
    await recipientsUpsert(event, tymlyService)
  })

  it('Check contacts imported properly', async () => {
    const recipients = await recipientModel.find({
      where: {
        customTemplateId: {
          equals: event.customTemplateId
        }
      }
    })

    expect(recipients.length).to.eql(5)
  })

  it('send custom mail to one recipient', async () => {
    const notifications = await notify.templates[templateName].sendMessage(
      {
        emailAddress: 'perm-fail@simulator.notify'
      },
      customTemplateId
    )

    expect(notifications.length).to.eql(1)
    expect(notifications[0].statusCode).to.eql(201)
  })

  it('send custom mail to multiple recipients', async () => {
    const notifications = await notify.templates[templateName].sendMessage(
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

  it('should shutdown Tymly', async () => {
    await tymlyService.shutdown()
  })
})
