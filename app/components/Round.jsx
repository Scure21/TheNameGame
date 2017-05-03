import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Pager from 'react-bootstrap/lib/Pager.js'
import Divider from 'muicss/lib/react/divider'

const Round = ({ userName, userScore, round }) => {
  return (
    <div>
      <div className="mui--text-display3">Round {round}</div>
      <div className="mui--text-headline">{userName} you have {userScore} points</div>
      <Divider />
      {round === 2 ? <div className='mui--text-headline'>
        It's important to train your short term memory to avoid memory loss! keep training
        </div> : null }
      {round === 3 ? <div className='mui--text-headline'>
        Awesome! Keep rocking it!
        </div> : null }
      {round === 4 ? <div className='mui--text-headline'>
        Get ready for the Bonus Round! remember this one is 200 points!
        </div> : null }
      <Pager>
          <Pager.Item next href="#" onSelect={() => browserHistory.push('/game')}>Start Round {round} &rarr;</Pager.Item>
      </Pager>
    </div>
  )
}

export default Round
