import React from 'react'
import Instructions from '../components/Instructions'
import { connect } from 'react-redux'

const InstructionsContainer = connect(state => ({
  userName: state.game.user.name
}))(Instructions)

export default InstructionsContainer
