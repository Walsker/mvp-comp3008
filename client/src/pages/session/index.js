import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useRouteMatch, Redirect } from 'react-router-dom'
import { useSession } from 'hooks'
import Completion from './completion'
import Halfway from './halfway'
import Scenario from './scenario'
import Test from './test'

const Session = () => {
  const { path } = useRouteMatch()
  const [scenarioCount, setScenarioCount] = useState(0)
  const [testCount, setTestCount] = useState(0)
  const session = useSession()

  console.log('Session ID: ', session.id)

  return (
    <Router>
      <Switch>
        <Route path={`${path}/scenario`}>
          <Scenario number={scenarioCount} next={() => setScenarioCount(scenarioCount + 1)} />
        </Route>
        <Route path={`${path}/halfway`} component={Halfway} />
        <Route path={`${path}/test`}>
          <Test number={testCount} order={session.testOrder} next={() => setTestCount(testCount + 1)} />
        </Route>
        <Route path={`${path}/completion`} component={Completion} />
        <Redirect to={`${path}/scenario`} />
      </Switch>
    </Router>
  )
}

export default Session
