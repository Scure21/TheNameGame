'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App'
import Home from './components/Home'
import UserLoginContainer from './containers/UserLoginContainer'
import InstructionsContainer from './containers/InstructionsContainer'
import RoundContainer from './containers/RoundContainer'
import GameContainer from './containers/GameContainer'
import EndContainer from './containers/EndContainer'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/register" component={UserLoginContainer}/>
        <Route path='/instructions' component={InstructionsContainer}/>
        <Route path='/game' component={GameContainer}/>
        <Route path='/round' component={RoundContainer}/>
        <Route path='/end' component={EndContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
