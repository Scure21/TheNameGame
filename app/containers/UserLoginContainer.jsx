import React from 'react'
import UserLogin from '../components/UserLogin'
import { connect } from 'react-redux'
import { getUserName } from '../reducers/game'

const UserLoginContainer = connect(state => ({
  userName: state.game.user.name
}), dispatch => ({
  getUserName (name) { dispatch(getUserName(name)) }
}))(UserLogin)

export default UserLoginContainer

