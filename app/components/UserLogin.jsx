import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { getUserName } from '../reducers/game'
import Button from 'muicss/lib/react/button'
import Input from 'muicss/lib/react/input'
import Textarea from 'muicss/lib/react/textarea'
import Container from 'muicss/lib/react/container'
import Panel from 'muicss/lib/react/panel'

export default class UserLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleClick () {
    this.props.getUserName(this.state.userName)
    browserHistory.push('/instructions')
  }

  handleInputChange (evt) {
    this.setState({
      userName: evt.target.value
    })
  }

  render () {
    return (
        <div className="mui--text-display3">
          <h2>First enter your name</h2>
          <Input hint='Enter Name' onChange={this.handleInputChange}></Input>
          <Button color="primary" onClick={this.handleClick}> Start </Button>
        </div>
    )
  }
}
