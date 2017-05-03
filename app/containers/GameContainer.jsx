import React from 'react'
import { connect } from 'react-redux'
import Game from '../components/Game'
import { fetchGameInfo,
         getRoundNumber,
         shuffleImages,
         getRandomPerson,
         getInfoFilterMatts,
         clearInfo,
         addPoints,
         bonusPoints } from '../reducers/game'

const GameContainer = connect(state => ({
  info: state.game.info,
  randomPerson: state.game.randomPerson,
  round: state.game.round,
  userName: state.game.user.name,
  userScore: state.game.user.points
}), dispatch => ({
  fetchGameInfo () { dispatch(fetchGameInfo()) },
  getRandomPerson (person) { dispatch(getRandomPerson(person)) },
  getInfoFilterMatts (info) { dispatch(getInfoFilterMatts(info)) },
  getRoundNumber () { dispatch(getRoundNumber()) },
  shuffleImages (images) { dispatch(shuffleImages(images)) },
  clearInfo (info) { dispatch(clearInfo(info)) },
  addPoints () { dispatch(addPoints()) },
  bonusPoints () { dispatch(bonusPoints()) }
}))(Game)

export default GameContainer
