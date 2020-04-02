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

  // console.log(entry)
  logs.push(entry)

  return entry
}

const save = async () => {
  const response = await fetch(`${window.location.origin}/api/logs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: sessionId,
      logs
    })
  })

  if (!response.ok) {
    alert(`Something went wrong. Please let the test organizers know.\nError Code: ${response.status}`)
  }
}

export { setSession, newEntry, EVENTS, save }
