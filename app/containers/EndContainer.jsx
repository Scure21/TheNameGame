import React from 'react'
import End from '../components/End'
import { clearRoundScore } from '../reducers/game'
import { connect } from 'react-redux'

const EndContainer = connect(state => ({
  userName: state.game.user.name,
  round: state.game.round,
  userScore: state.game.user.points
}), dispatch => ({
  clearRoundScore () { dispatch(clearRoundScore()) }
}))(End)

export default EndContainer
