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

  it('boot tymly', done => {
    tymly.boot(
      {
        pluginPaths: [
          path.resolve(__dirname, './../lib')
        ],
        blueprintPaths: [
          path.resolve(__dirname, './fixtures/blueprints/welcome-blueprint')
        ],
        config: {}
      },
      (err, tymlyServices) => {
        expect(err).to.eql(null)
        tymlyService = tymlyServices.tymly
        statebox = tymlyServices.statebox
        done()
      }
    )
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
      notificationId = executionDescription.ctx.sentMail[0].id
    } else {
      expect(executionDescription.status).to.eql('FAILED')
      expect(executionDescription.errorCode).to.eql('GOV_UK_NOTIFY_FAIL')
    }
  })

  // const testFn = hasGovNotifyKey ? it : xit
  // testFn('should wait for the message to send and check it failed', async () => {
  //   while (messageStatus === 'created' || messageStatus === 'sending') {
  //     await new Promise((resolve, reject) => {
  //       statebox.startExecution(
  //         { notificationId },
  //         GET_MESSAGE_STATUS_STATE_MACHINE_NAME,
  //         {
  //           sendResponse: 'COMPLETE'
  //         },
  //         (err, executionDescription) => {
  //           if (err) {
  //             reject(err)
  //           } else if (executionDescription.status === 'FAILED') {
  //             reject(new Error(executionDescription.errorCode))
  //           }
  //           messageStatus = executionDescription.ctx.message.status
  //           resolve()
  //         }
  //       )
  //     })
  //   }
  //   expect(messageStatus).to.eql('permanent-failure')
  // })
  //
  // it('start state machine to send mail without an email', async () => {
  //   const executionDescription = await statebox.startExecution(
  //     {
  //       name: 'John Doe'
  //     },
  //     SEND_MAIL_STATE_MACHINE_NAME,
  //     {
  //       sendResponse: 'COMPLETE'
  //     }
  //   )
  //
  //   if (hasGovNotifyKey) {
  //     expect(executionDescription.status).to.eql('FAILED')
  //     expect(executionDescription.errorCode).to.eql('NO_EMAIL_OR_PHONE_NUMBER')
  //   } else {
  //     expect(executionDescription.status).to.eql('FAILED')
  //     expect(executionDescription.errorCode).to.eql('GOV_UK_NOTIFY_FAIL')
  //   }
  // })
  //
  // it('should attempt to send mail to multiple numbers', async () => {
  //   const executionDescription = await statebox.startExecution(
  //     [
  //       {
  //         emailAddress: 'perm-fail@simulator.notify',
  //         name: 'John Doe'
  //       },
  //       {
  //         emailAddress: 'perm-fail@simulator.notify',
  //         name: 'Jane Doe'
  //       }
  //     ],
  //     SEND_MAIL_STATE_MACHINE_NAME,
  //     {
  //       sendResponse: 'COMPLETE'
  //     }
  //   )
  //
  //   if (hasGovNotifyKey) {
  //     expect(executionDescription.status).to.eql('SUCCEEDED')
  //     expect(executionDescription.ctx.sentMail.length).to.eql(2)
  //   } else {
  //     expect(executionDescription.status).to.eql('FAILED')
  //     expect(executionDescription.errorCode).to.eql('GOV_UK_NOTIFY_FAIL')
  //   }
  // })

  it('should shutdown Tymly', async () => {
    await tymlyService.shutdown()
  })
})
