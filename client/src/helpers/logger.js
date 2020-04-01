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

const logs = []
let sessionId = null

const setSession = id => (sessionId = id)

const newEntry = (scenario, event) => {
  const entry = {
    time: new Date().toString(),
    id: sessionId,
    scenario,
    event
  }

  console.log(entry)
  logs.push(entry)

  return entry
}

export { setSession, newEntry, EVENTS }
