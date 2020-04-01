const fs = require('fs')
const LogsController = module.exports

const EVENTS = {
  startTest: 'startTest',
  pwPracticeGood: 'pwPracticeGood',
  pwPracticeBad: 'pwPracticeBad',
  nextPage: 'nextPage',
  halfwayContinue: 'halfwayContinue',
  pwTestStart: 'pwTestStart',
  pwTestGood: 'pwTestGood',
  pwTestBad: 'pwTestBad',
  pwInputDisabled: 'pwInputDisabled',
  testComplete: 'testComplete'
}

/**
 * A method that calculates the time in seconds between two dates.
 * @param {string|number} dateString1 A date string | Milliseconds since epoch.
 * @param {string|number} dateString2 A second date string | Milliseconds since epoch.
 * @returns {number} The number of seconds between the two dates.
 */
const subtractTime = (dateString1, dateString2) => Math.abs((new Date(dateString1) - new Date(dateString2)) / 1000)

LogsController.saveIncomingLogs = (req, res) => {
  const { id, logs } = req.body

  const date = new Date()

  let logOutput = 'time,scenario,event\n'
  logs.forEach(entry => (logOutput += `${new Date(entry.time).toISOString()},${entry.scenario},${entry.event}\n`))

  // Write the logs out
  fs.writeFile(`./results/logs-${id}.csv`, logOutput, error => {
    if (error) {
      console.error('Write logs failed. Error: ', error)
    }
    console.log('Logging complete!')
  })

  let startTime = ''
  const logins = {
    successful: 0,
    totalSuccessTime: 0,
    get avgSuccessTime() {
      return this.successful === 0 ? 0 : this.totalSuccessTime / this.successful
    },
    failed: 0,
    totalFailedTime: 0,
    get avgFailedTime() {
      return this.failed === 0 ? 0 : this.totalFailedTime / this.failed
    }
  }

  /**
   * A function which gathers the needed information from a log entry
   * @param {Object} param
   * @param {string} param.time The time which the action ocurred.
   * @param {string} param.user The session's ID.
   * @param {string} param.scenario The password scenario presented to the user.
   * @param {string} param.event The event name.
   */
  const processEntry = ({ time, id, scenario, event }) => {
    // Check if the user has pressed the "attempt" button
    if (event === EVENTS.pwTestStart) {
      // Mark down the time which they started
      startTime = time

      // Check if the user made a login attempt
    } else if (event === EVENTS.pwTestBad) {
      logins.failed++
      logins.totalFailedTime += subtractTime(startTime, time)
    } else if (event === EVENTS.pwTestGood) {
      logins.successful++

      logins.totalSuccessTime += subtractTime(startTime, time)
    }

    return logins
  }

  logs.forEach(processEntry)

  let statsOutput =
    'user,total logins,successful logins,unsuccessful logins,avg login time success (seconds),avg login time failed (seconds)\n'

  statsOutput = `${id},${logins.successful + logins.failed},${logins.successful},${logins.failed},${
    logins.avgSuccessTime
  },${logins.avgFailedTime}\n`

  // Add the results to
  fs.appendFile('./results/main.csv', statsOutput, error => {
    if (error) {
      console.error('Write to results failed. Error: ', error)
    }
    console.log('Processing complete!')
  })

  res.sendStatus(200)
}
