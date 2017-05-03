import React from 'react'
import { IndexLink } from 'react-router'
import Appbar from 'muicss/lib/react/appbar'
import Container from 'muicss/lib/react/container'
import Panel from 'muicss/lib/react/panel'

const App = (props) => (
  <Container className="container" >
    <div>
      <div className="mui--text-display4 title">Steph's Name Game</div>
      <Panel className="mui-panel">
        <ul className="header">
          <li><IndexLink to="/home" activeClassName="active" className="glyphicon glyphicon-home"></IndexLink></li>
        </ul>
        <div className="content">
          {props.children}
        </div>
      </Panel>
    </div>
  </Container>
)
export default App
