import React from 'react'
import { IndexLink, Link, browserHistory } from 'react-router'
import Appbar from 'muicss/lib/react/appbar'
import Container from 'muicss/lib/react/container'
import Panel from 'muicss/lib/react/panel'
import Button from 'muicss/lib/react/button'

const Instructions = ({userName}) => (
    <div>
      {userName ? <h3 className="mui--text-headline">Hi {userName}, read the instructions!</h3>
        : <h3 className="mui--text-headline">Hi! Read the instructions!</h3>
      }
      <img className= 'img-responsive star-img' src="star.png"/>
        <div className="mui--text-body1">
          <ul className="instructions-list">
            <li>There are 4 rounds in the game. In each round images of your future co-workers will appear with their names</li>
            <li>You will have <b>20</b> seconds to take a look at the images and names</li>
            <li>Then the names will <b>dissapear</b> and the images will change <b>position</b></li>
            <li>A question will appear and you must click on the image that corresponds to the name in the question</li>
            <li>You will have <b>3</b> normal rounds and a <b>bonus round</b></li>
              <ul>
                <li>If you guess correctly you will earn <b>50</b> points</li>
                <li>If you guess incorrectly you will not earn points</li>
              </ul>
              <ul>
                <h2 className="mui--text-headline">Bonus Round</h2>
                <li><b>90%</b> of your possible co-workers names start with Mat(t)</li>
                <li>In this round only names starting with Mat(t) will appear</li>
                <li>If you guess correctly you will earn <b>200</b> points!</li>
              </ul>
          </ul>
        </div>
      <h3 className="mui--text-body1">Click the button to get started!</h3>
    <Button className="mui-btn mui-btn--raised" color="primary" onClick={() => browserHistory.push('/game')}>Start</Button>
  </div>
)
export default Instructions
