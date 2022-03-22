const { parse } = require('csv-parse')
const fs = require('fs')
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance()
// eslint-disable-next-line
const emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i

function validateRecipient (messageType, recipient) {
  if (messageType === 'mail') {
    return emailRegex.test(recipient.trim())
  } else if (messageType === 'sms') {
    try {
      const parsed = phoneUtil.parse(recipient, 'GB')
      return phoneUtil.isValidNumber(parsed)
    } catch (e) {
      console.log('Error with num: ', recipient, e)
    }
  }
}

function readCsv (csvFile, importLog, messageType) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFile)
      .pipe(parse({ columns: false }))
      .on('data', row => {
        // check valid email/sms
        const isValid = validateRecipient(messageType, row[0])

        // if valid, push to importLog.rows , bump importLog.totalRows
        if (isValid) {
          importLog.rows.push(row[0])
          importLog.totalRows++
        } else {
          // else bump importLog.totalRejected and push to importlog.rejected
          importLog.rejected.push(row[0])
          importLog.totalRejected++
        }
      })
      .on('error', reject)
      .on('end', resolve)
  })
}

async function processFile ({ serverFilename, clientFilename }, messageType) {
  const importLog = {
    serverFilename,
    clientFilename,
    rows: [],
    rejected: [],
    totalRows: 0,
    totalRejected: 0
  }

  await readCsv(serverFilename, importLog, messageType)

  return importLog
}

module.exports = function () {
  return async function processGovUkRecipients (event) {
    const { messageType } = event.body
    const {
      serverFilename,
      clientFilename
    } = event.body.upload

    try {
      return processFile({ serverFilename, clientFilename }, messageType)
    } catch (err) {
      return {
        uploadGood: '',
        uploadWarning: '',
        uploadError: `Could not process file upload: ${err.message}`
      }
    }
  }
}
