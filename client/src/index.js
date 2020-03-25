import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, Consent, Instructions, Scenario, Halfway, Completion } from 'pages'
import './index.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Completion />
      </Route>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
