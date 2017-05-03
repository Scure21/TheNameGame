import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Pager from 'react-bootstrap/lib/Pager.js'
import Divider from 'muicss/lib/react/divider'

const End = ({userName, userScore, round, clearRoundScore}) => {
  if (userScore < 175) {
    return (
    <div>
      <div className="mui--text-headline">Oh o!</div>
      <div className="mui--text-headline">{userName} your score is {userScore} points</div>
      <div className="mui--text-headline">It seems you need to keep practicing!</div>
      <Pager>
          <Pager.Item previous href="#" onSelect={() => {
            clearRoundScore()
            browserHistory.push('/home')
          }}>Home &rarr;</Pager.Item>
          <Pager.Item next href="#" onSelect={() => {
            clearRoundScore()
            browserHistory.push('/game')
          }}>&larr; Play again </Pager.Item>
      </Pager>
    </div>
    )
  } else {
    return (
    <div>
      <div className="mui--text-headline">Great Job!</div>
      <div className="mui--text-headline">{userName} your score is {userScore} points</div>
      <Divider/>
      <div className="mui--text-headline">You have very good memory!!</div>
      <Pager>
          <Pager.Item next href="#" onSelect={() => {
            clearRoundScore()
            browserHistory.push('/game')
          }}>&larr; Play again </Pager.Item>
          <Pager.Item next href="#" onSelect={() => {
            clearRoundScore()
            browserHistory.push('/home')
          }}>Home &rarr;</Pager.Item>
      </Pager>
    </div>
    )
  }
}

export default End
