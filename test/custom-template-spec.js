/* eslint-env mocha */

const expect = require('chai').expect
const tymly = require('@wmfs/tymly')
const process = require('process')
const csvparse = require('csv-parse')
const fs = require('fs')
const { v1: uuid } = require('uuid')
const { pluginPaths, blueprintPaths } = require('./fixtures/tymly-paths')

const recipientsSelect = require('../lib/blueprints/tymly-blueprint/functions/process-gov-uk-recipients')()
const recipientsUpload = require('../lib/blueprints/tymly-blueprint/functions/upload-gov-uk-recipients')()
const path = require('path')

describe('Custom template tests', function () {
  this.timeout(process.env.TIMEOUT || 15000)

  const templateName = 'test_customMail'
  const messageType = 'mail'
  const subject = 'Hello world'
  const message = 'Today will be sunny with some clouds'
  const emailFileName = 'email-inputs-test.csv'
  const smsFileName = 'sms-inputs-test.csv'

  let tymlyService
  let statebox
  let notify
  let customTemplateModel
  let customTemplateId
  let event = {}

  it('boot tymly', async () => {
    const tymlyServices = await tymly.boot(
      {
        pluginPaths,
        blueprintPaths,
        config: {}
      }
    )

    tymlyService = tymlyServices.tymly
    statebox = tymlyServices.statebox
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

  it('Select recipient file', async () => {
    event = {
      body: {
        upload: {
          serverFilename: path.join(__dirname, 'fixtures', emailFileName),
          clientFilename: path.join(__dirname, 'fixtures', emailFileName)
        },
        messageType
      },
      importDirectory: path.join(__dirname, 'fixtures', 'output'),
      importLogId: {
        id: uuid()
      }
    }

    const result = await recipientsSelect(event)

    console.log('Results: ', result)
    expect(result.totalRows).to.eql(3)
    expect(result.rows).to.eql([ 'tymly@wmfs.net', 'test@test.com', 'test2@test.com' ])
    expect(result.totalRejected).to.eql(2)
    expect(result.rejected).to.eql([ 'not an email', 'also not an email?' ])

    event.totalRows = result.totalRows
    event.fileName = emailFileName
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
