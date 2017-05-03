import React from 'react'
import { Link, browserHistory } from 'react-router'
import Button from 'muicss/lib/react/button'

const Home = () => (
    <div>
        <div className="mui--text-display1">
          This is a fun game so you can get to know your future co-workers!
        </div>
      <h3 className="mui--text-subhead">Click the button to get started</h3>
      <Button className="mui-btn mui-btn--raised" color="primary" onClick={() => browserHistory.push('/register')}>Start</Button>
    </div>
)

export default Home
