import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useRouteMatch, Redirect } from 'react-router-dom'
import { useSession } from 'hooks'
import { setSession } from 'helpers/logger'
import Completion from './completion'
import Halfway from './halfway'
import Scenario from './scenario'
import Test from './test'

const STATES = {
  waiting: 'waiting',
  attempting: 'attempting',
  passed: 'passed',
  failed: 'failed'
}

const Session = () => {
  const { path } = useRouteMatch()
  const [sessionState, setSessionState] = useState(STATES.waiting)
  const [scenarioCount, setScenarioCount] = useState(0)
  const [testCount, setTestCount] = useState(0)
  const session = useSession()

  useEffect(() => {
    setSession(session.id)
  }, [])

  return (
    <Router>
      <Switch>
        <Route path={`${path}/scenario`}>
          <Scenario
            number={scenarioCount}
            password={session.passwords[scenarioCount]}
            next={() => setScenarioCount(scenarioCount + 1)}
          />
        </Route>
        <Route path={`${path}/halfway`} component={Halfway} />
        <Route path={`${path}/test`}>
          <Test
            number={testCount}
            password={session.passwords[session.testOrder[testCount]]}
            order={session.testOrder}
            session={{ state: sessionState, setState: setSessionState }}
            next={() => {
              setTestCount(testCount + 1)
              setSessionState(STATES.waiting)
            }}
          />
        </Route>
        <Route path={`${path}/completion`} component={Completion} />
        <Redirect to={`${path}/scenario`} />
      </Switch>
    </Router>
  )
}

export default Session
