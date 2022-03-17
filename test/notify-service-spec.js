/* eslint-env mocha */

const expect = require('chai').expect
const tymly = require('@wmfs/tymly')
const process = require('process')
const { pluginPaths, blueprintPaths } = require('./fixtures/tymly-paths')

describe('Send Mail tests', function () {
  this.timeout(process.env.TIMEOUT || 15000)

  let tymlyService
  let notify

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
  })

  it('check service has loaded message templates', () => {
    expect(Object.keys(notify.templates).length).to.eql(4)
    expect(notify.templates.test_customMail.isCustomTemplate).to.eql(true)
    expect(notify.templates.test_customSms.isCustomTemplate).to.eql(true)
    expect(notify.templates.test_welcomeMail.isCustomTemplate).to.eql(false)
    expect(notify.templates.test_welcomeSms.isCustomTemplate).to.eql(false)
  })

  it('list all message templates as array', () => {
    const templates = notify.listMessageTemplates({ format: 'array' })

    expect(Array.isArray(templates)).to.eql(true)
    expect(templates.length).to.eql(4)
  })

  it('list all message templates as array', () => {
    const templates = notify.listMessageTemplates({ format: 'object' })

    expect(Array.isArray(templates)).to.eql(false)
    expect(typeof templates).to.eql('object')
    expect(Object.keys(templates).length).to.eql(4)
  })

  it('list custom message templates as array', () => {
    const templates = notify.listMessageTemplates({ format: 'array', customOnly: true })

    expect(Array.isArray(templates)).to.eql(true)
    expect(templates.length).to.eql(2)
  })

  it('list custom message templates as array', () => {
    const templates = notify.listMessageTemplates({ format: 'object', customOnly: true })

    expect(Array.isArray(templates)).to.eql(false)
    expect(typeof templates).to.eql('object')
    expect(Object.keys(templates).length).to.eql(2)
  })

  it('should shutdown Tymly', async () => {
    await tymlyService.shutdown()
  })
})
