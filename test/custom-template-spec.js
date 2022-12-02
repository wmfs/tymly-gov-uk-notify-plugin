/* eslint-env mocha */

const expect = require('chai').expect
const tymly = require('@wmfs/tymly')
const process = require('process')
const { v1: uuid } = require('uuid')
const { pluginPaths, blueprintPaths } = require('./fixtures/tymly-paths')

const recipientsSelect = require('../lib/blueprints/tymly-blueprint/functions/process-gov-uk-recipients')()
const recipientsUpsert = require('../lib/blueprints/tymly-blueprint/functions/upsert-gov-uk-recipients')()
const sendConfigUpsert = require('../lib/blueprints/tymly-blueprint/functions/upsert-gov-uk-send-config')()
const path = require('path')

describe('Custom template tests', function () {
  this.timeout(process.env.TIMEOUT || 15000)

  const hasGovNotifyKey = !!process.env.GOV_UK_NOTIFY_API_KEY

  const mailTemplate1 = {
    name: 'test_customMail',
    type: 'mail',
    subject: 'Hello World',
    message: 'Today will be sunny with some clouds',
    fileName: 'email-inputs-test.csv'
  }

  const mailTemplate2 = {
    name: 'test_customDelayedMail',
    type: 'mail',
    subject: 'Sorry for the delay',
    message: 'Light showers forecasted',
    formSubmitEventName: 'test_formSubmitted'
  }

  const formSubmitEventName = 'test_formSubmitted'
  const smsTemplateName = 'test_customSms'
  const smsMessageType = 'sms'
  const smsMessage = 'Hello ((customerName))!! Will it be sunny today?'
  const smsFileName = 'sms-inputs-test.csv'

  let tymlyService
  let statebox
  let notify
  let customTemplateModel
  let sendConfigModel
  let recipientModel
  let notificationModel
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
    statebox = tymlyServices.statebox
    notificationModel = tymlyServices.storage.models.tymly_govUkNotifications
    customTemplateModel = tymlyServices.storage.models.tymly_govUkCustomTemplates
    sendConfigModel = tymlyServices.storage.models.tymly_customTemplateSendConfig
    recipientModel = tymlyServices.storage.models.tymly_govUkCustomTemplateRecipients
  })

  it('create custom message template 1 as mail', async () => {
    customTemplateId = await notify.createCustomMessageTemplate({
      templateName: mailTemplate1.name,
      messageType: mailTemplate1.type,
      subject: mailTemplate1.subject,
      message: mailTemplate1.message
    })

    const customTemplates = await customTemplateModel.find({})
    expect(customTemplates.length).to.eql(1)
    event.customTemplateId = customTemplateId
  })

  it('Select recipient file (mail)', async () => {
    event.body = {
      upload: {
        serverFilename: path.join(__dirname, 'fixtures', mailTemplate1.fileName),
        clientFilename: path.join(__dirname, 'fixtures', mailTemplate1.fileName)
      },
      messageType: mailTemplate1.type
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
    expect(result.rejected).to.eql(
      [
        {
          idx: 2,
          row: 'not an email'
        },
        {
          idx: 5,
          row: 'also not an email?'
        }
      ]
    )

    event.result = result
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
      messageType: smsMessageType
    }
    event.importDirectory = path.join(__dirname, 'fixtures', 'output')
    event.importLogId = {
      id: uuid()
    }

    const result = await recipientsSelect(event)
    event.importLog = result

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

  it('send custom mail 1 to one recipient', async () => {
    const notifications = await notify.templates[mailTemplate1.name].sendMessage(
      {
        emailAddress: 'perm-fail@simulator.notify'
      },
      customTemplateId
    )

    if (hasGovNotifyKey) {
      expect(notifications.length).to.eql(1)
      expect(notifications[0].statusCode).to.eql(201)
    } else {
      expect(notifications.length).to.eql(1)
      expect(notifications[0].statusCode).to.eql(403)
    }
  })

  it('send custom mail 1 to multiple recipients', async () => {
    const notifications = await notify.templates[mailTemplate1.name].sendMessage(
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
    if (hasGovNotifyKey) {
      expect(notifications.length).to.eql(2)
      expect(notifications[0].statusCode).to.eql(201)
      expect(notifications[1].statusCode).to.eql(201)
    } else {
      expect(notifications.length).to.eql(2)
      expect(notifications[0].statusCode).to.eql(403)
      expect(notifications[1].statusCode).to.eql(403)
    }
  })

  it('create custom message template as sms', async () => {
    customTemplateId = await notify.createCustomMessageTemplate({
      templateName: smsTemplateName,
      messageType: smsMessageType,
      message: smsMessage,
      sendOnEvents: [formSubmitEventName]
    })

    const customTemplates = await customTemplateModel.find({})
    expect(customTemplates.length).to.eql(2)
  })

  it('add recipient to custom sms', async () => {
    await recipientModel.create({
      customTemplateId,
      recipient: '07700900003'
    })
  })

  it('check sms notifications sent before event trigger', async () => {
    const receipts = await notificationModel.find({
      where: {
        templateName: {
          equals: 'customSms'
        }
      }
    })
    expect(receipts.length).to.eql(0)
  })

  it('run state machine to submit a form and fire a notify event', async () => {
    const execDesc = await statebox.startExecution(
      {
        name: 'Robert'
      },
      'test_orderPizzaForm',
      {
        sendResponse: 'COMPLETE'
      }
    )

    expect(execDesc.status).to.eql('SUCCEEDED')
  })

  it('check sms notifications sent after event trigger', async () => {
    const receipts = await notificationModel.find({
      where: {
        templateName: {
          equals: 'customSms'
        }
      }
    })
    expect(receipts.length).to.eql(1)

    const [receipt] = receipts
    expect(receipt.input.message).to.eql('Hello Robert!! Will it be sunny today?')
  })

  it('create custom message template 2 as mail', async () => {
    customTemplateId = await notify.createCustomMessageTemplate({
      templateName: mailTemplate2.name,
      messageType: mailTemplate2.type,
      subject: mailTemplate2.subject,
      message: mailTemplate2.message,
      sendOnEvents: [mailTemplate2.formSubmitEventName]
    })

    const customTemplates = await customTemplateModel.find({})
    expect(customTemplates.length).to.eql(3)
    event.customTemplateId = customTemplateId
  })

  it('upsert send configuration for custom message template 2', async () => {
    event.id = event.customTemplateId
    event.sendOnEventsNew = [mailTemplate2.formSubmitEventName]
    event.offsetLength = 10
    event.offsetType = 'test'

    await sendConfigUpsert(event, tymlyService)

    const sendConfigs = await sendConfigModel.find({
      where: {
        customTemplateId: {
          equals: event.customTemplateId
        }
      }
    })

    expect(sendConfigs.length).to.eql(1)
  })

  it('check email notifications sent before event trigger', async () => {
    const receipts = await notificationModel.find({
      where: {
        templateName: {
          equals: 'customDelayedMail'
        }
      }
    })
    expect(receipts.length).to.eql(0)
  })

  /*
  it('emit notify event simulating form submission', async () => {
    await notify.emitNotifyEvents(['test_formSubmitted'], {customerName: 'Richard'}, ['perm-fail@simulator.notify'])
  })
  */

  it('run state machine to submit a form and fire a notify event', async () => {
    const execDesc = await statebox.startExecution(
      {
        name: 'Richard'
      },
      'test_cancelPizzaOrderForm',
      {
        sendResponse: 'COMPLETE'
      }
    )

    expect(execDesc.status).to.eql('SUCCEEDED')
  })

  it('check email notifications sent immediately after event trigger', async () => {
    const receipts = await notificationModel.find({
      where: {
        templateName: {
          equals: 'customDelayedMail'
        }
      }
    })
    expect(receipts.length).to.eql(0)
  })

  it('wait 10 seconds', done => setTimeout(done, 10000))

  it('check email notifications sent after delay', async () => {
    const receipts = await notificationModel.find({
      where: {
        templateName: {
          equals: 'customDelayedMail'
        }
      }
    })
    expect(receipts.length).to.eql(1)
    const receipt = receipts[0]
    expect(receipt.input.message).to.eql('Light showers forecasted')
  })

  it('should shutdown Tymly', async () => {
    await tymlyService.shutdown()
  })
})
