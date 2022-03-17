/* eslint-env mocha */

const expect = require('chai').expect
const tymly = require('@wmfs/tymly')
const process = require('process')
const { pluginPaths, blueprintPaths } = require('./fixtures/tymly-paths')

const SEND_SMS_STATE_MACHINE_NAME = 'test_sendWelcomeSms'
// const SEND_INVALID_STATE_MACHINE_NAME = 'test_sendWelcomeInvalid'
const GET_MESSAGE_STATUS_STATE_MACHINE_NAME = 'test_getMessageStatus'

describe('Send SMS tests', function () {
  this.timeout(process.env.TIMEOUT || 15000)

  const hasGovNotifyKey = !!process.env.GOV_UK_NOTIFY_API_KEY

  let tymlyService
  let statebox
  let notificationId
  let notify
  let messageStatus = 'created'

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

    expect(Object.keys(notify.templates).length).to.eql(4)
    expect(notify.templates.test_customMail.isCustomTemplate).to.eql(true)
    expect(notify.templates.test_customSms.isCustomTemplate).to.eql(true)
    expect(notify.templates.test_welcomeMail.isCustomTemplate).to.eql(false)
    expect(notify.templates.test_welcomeSms.isCustomTemplate).to.eql(false)
  })

  it('start state machine to send SMS with a phone number expected to succeed', async () => {
    const executionDescription = await statebox.startExecution(
      {
        phoneNumber: '07700900003',
        name: 'Robert'
      },
      SEND_SMS_STATE_MACHINE_NAME,
      {
        sendResponse: 'COMPLETE'
      }
    )

    if (hasGovNotifyKey) {
      expect(executionDescription.status).to.eql('SUCCEEDED')
    } else {
      expect(executionDescription.status).to.eql('FAILED')
      expect(executionDescription.errorCode).to.eql('GOV_UK_NOTIFY_FAIL')
    }
  })

  it('start state machine to send SMS with multiple phone numbers expected to succeed', async () => {
    const executionDescription = await statebox.startExecution(
      [
        {
          phoneNumber: '07700900003',
          name: 'Robert'
        },
        {
          phoneNumber: '07700900111',
          name: 'Tom'
        }
      ],
      SEND_SMS_STATE_MACHINE_NAME,
      {
        sendResponse: 'COMPLETE'
      }
    )

    if (hasGovNotifyKey) {
      expect(executionDescription.status).to.eql('SUCCEEDED')
      expect(executionDescription.ctx.sent.length).to.eql(2)
    } else {
      expect(executionDescription.status).to.eql('FAILED')
      expect(executionDescription.errorCode).to.eql('GOV_UK_NOTIFY_FAIL')
    }
  })

  it('start state machine to send SMS with an invalid phone number', async () => {
    const executionDescription = await statebox.startExecution(
      {
        phoneNumber: '077009',
        name: 'Robert'
      },
      SEND_SMS_STATE_MACHINE_NAME,
      {
        sendResponse: 'COMPLETE'
      }
    )

    if (hasGovNotifyKey) {
      expect(executionDescription.ctx.sent[0].statusCode).to.eql(400)
      expect(executionDescription.ctx.sent[0].error).to.eql('400 - phone_number Not enough digits')
    } else {
      expect(executionDescription.status).to.eql('FAILED')
      expect(executionDescription.errorCode).to.eql('GOV_UK_NOTIFY_FAIL')
    }
  })

  it('start state machine to send SMS without a phone number', async () => {
    const executionDescription = await statebox.startExecution(
      {
        name: 'Robert'
      },
      SEND_SMS_STATE_MACHINE_NAME,
      {
        sendResponse: 'COMPLETE'
      }
    )

    if (hasGovNotifyKey) {
      expect(executionDescription.status).to.eql('FAILED')
      expect(executionDescription.errorCode).to.eql('SEND_MESSAGE_FAIL')
      expect(executionDescription.errorMessage).to.eql('No phone number provided')
    } else {
      expect(executionDescription.status).to.eql('FAILED')
      expect(executionDescription.errorCode).to.eql('GOV_UK_NOTIFY_FAIL')
    }
  })

  // it('start state machine to send SMS with an invalid message type', async () => {
  //   const executionDescription = await statebox.startExecution(
  //     {
  //       phoneNumber: '07700900111',
  //       name: 'Robert'
  //     },
  //     SEND_INVALID_STATE_MACHINE_NAME,
  //     {
  //       sendResponse: 'COMPLETE'
  //     }
  //   )
  //   if (hasGovNotifyKey) {
  //     expect(executionDescription.status).to.eql('FAILED')
  //     expect(executionDescription.errorCode).to.eql('INVALID_MESSAGE_TYPE')
  //   } else {
  //     expect(executionDescription.status).to.eql('FAILED')
  //     expect(executionDescription.errorCode).to.eql('GOV_UK_NOTIFY_FAIL')
  //   }
  // })

  it('start state machine to send SMS with a phone number expected to fail', async () => {
    const executionDescription = await statebox.startExecution(
      {
        phoneNumber: '07700900002',
        name: 'Robert'
      },
      SEND_SMS_STATE_MACHINE_NAME,
      {
        sendResponse: 'COMPLETE'
      }
    )
    if (hasGovNotifyKey) {
      expect(executionDescription.status).to.eql('SUCCEEDED')
      notificationId = executionDescription.ctx.sent[0].notifyId
    } else {
      expect(executionDescription.status).to.eql('FAILED')
      expect(executionDescription.errorCode).to.eql('GOV_UK_NOTIFY_FAIL')
    }
  })

  it('start state machine to send SMS without a name expected to fail', async () => {
    const executionDescription = await statebox.startExecution(
      {
        phoneNumber: '07700900002'
      },
      SEND_SMS_STATE_MACHINE_NAME,
      {
        sendResponse: 'COMPLETE'
      }
    )

    if (hasGovNotifyKey) {
      expect(executionDescription.status).to.eql('FAILED')
      expect(executionDescription.errorCode).to.eql('SEND_MESSAGE_FAIL')
      expect(executionDescription.errorMessage).to.eql('Missing input: name')
    } else {
      expect(executionDescription.status).to.eql('FAILED')
      expect(executionDescription.errorCode).to.eql('GOV_UK_NOTIFY_FAIL')
    }
  })

  const testFn = hasGovNotifyKey ? it : xit
  testFn('should wait for the message to send and check it failed', async () => {
    while (messageStatus === 'created' || messageStatus === 'sending' || messageStatus === 'sent') {
      const executionDescription = await statebox.startExecution(
        {
          messageTemplateId: 'test_welcomeSms',
          notificationId
        },
        GET_MESSAGE_STATUS_STATE_MACHINE_NAME,
        {
          sendResponse: 'COMPLETE'
        }
      )

      expect(executionDescription.status).to.not.eql('FAILED')
      messageStatus = executionDescription.ctx.status
    }
    expect(messageStatus).to.eql('permanent-failure')
  })

  it('should shutdown Tymly', async () => {
    await tymlyService.shutdown()
  })
})
