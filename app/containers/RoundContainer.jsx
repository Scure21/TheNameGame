import React from 'react'
import Round from '../components/Round'
import { connect } from 'react-redux'

const RoundContainer = connect(state => ({
  info: state.game.info,
  userName: state.game.user.name,
  round: state.game.round,
  userScore: state.game.user.points
}))(Round)

export default RoundContainer
