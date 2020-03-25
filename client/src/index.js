import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, Consent, Instructions, Session } from 'pages'
import './index.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/consent' component={Consent} />
      <Route path='/instructions' component={Instructions} />
      <Route path='/session' component={Session} />
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
