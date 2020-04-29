/* eslint-env mocha */

const expect = require('chai').expect
const tymly = require('@wmfs/tymly')
const path = require('path')
const process = require('process')

const SEND_MAIL_STATE_MACHINE_NAME = 'test_sendWelcomeMail'
const GET_MESSAGE_STATUS_STATE_MACHINE_NAME = 'test_getMessageStatus'

describe('Send Mail tests', function () {
  this.timeout(process.env.TIMEOUT || 15000)

  const hasGovNotifyKey = !!process.env.GOV_UK_NOTIFY_API_KEY

  let tymlyService, statebox, notificationId
  let messageStatus = 'created'

  it('boot tymly', async () => {
    const tymlyServices = await tymly.boot(
      {
        pluginPaths: [
          path.resolve(__dirname, './../lib')
        ],
        blueprintPaths: [
          path.resolve(__dirname, './fixtures/blueprints/welcome-blueprint')
        ],
        config: {}
      }
    )

    tymlyService = tymlyServices.tymly
    statebox = tymlyServices.statebox
  })

  it('start state machine to send mail', async () => {
    const executionDescription = await statebox.startExecution(
      {
        emailAddress: 'perm-fail@simulator.notify',
        name: 'John Doe'
      },
      SEND_MAIL_STATE_MACHINE_NAME,
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

  const testFn = hasGovNotifyKey ? it : xit
  testFn('should wait for the message to send and check it failed', async () => {
    while (messageStatus === 'created' || messageStatus === 'sending') {
      const executionDescription = statebox.startExecution(
        {
          messageTemplateId: 'test_welcomeMail',
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

  it('start state machine to send mail without an email', async () => {
    const executionDescription = await statebox.startExecution(
      {
        name: 'John Doe'
      },
      SEND_MAIL_STATE_MACHINE_NAME,
      {
        sendResponse: 'COMPLETE'
      }
    )

    if (hasGovNotifyKey) {
      expect(executionDescription.status).to.eql('FAILED')
      expect(executionDescription.errorCode).to.eql('SEND_MESSAGE_FAIL')
      expect(executionDescription.errorMessage).to.eql('No email address provided')
    } else {
      expect(executionDescription.status).to.eql('FAILED')
      expect(executionDescription.errorCode).to.eql('GOV_UK_NOTIFY_FAIL')
    }
  })

  it('should attempt to send mail to multiple numbers', async () => {
    const executionDescription = await statebox.startExecution(
      [
        {
          emailAddress: 'perm-fail@simulator.notify',
          name: 'John Doe'
        },
        {
          emailAddress: 'perm-fail@simulator.notify',
          name: 'Jane Doe'
        }
      ],
      SEND_MAIL_STATE_MACHINE_NAME,
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

  it('should shutdown Tymly', async () => {
    await tymlyService.shutdown()
  })
})
