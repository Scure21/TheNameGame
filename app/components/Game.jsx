import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Panel from 'muicss/lib/react/panel'
import Pager from 'react-bootstrap/lib/Pager.js'
import _ from 'lodash'

export default class Game extends Component {
  constructor (props) {
    super(props)
    this.state = {
      onClickToggle: false,
      counter: 20,
      nameToggle: false,
      textToggle: false
    }
    this.timer = this.timer.bind(this)
    this.onclick = this.onClick.bind(this)
  }

  componentDidMount () {
     // get all Images
    this.props.fetchGameInfo()
    // filter for only Matt prefix in names if round = 4
    if (this.props.round === 4) {
      this.props.getInfoFilterMatts()
    }
    // Initialize timer to hide names
    this.interval = setInterval(this.timer, 1000)
  }

  componentWillUnmount () {
    // stop the timer when component unmounts
    clearInterval(this.interval)
    this.props.clearInfo([])
  }

  timer () {
    // timer to count 20 secs then remove names
    this.setState({counter: this.state.counter - 1})
    if (this.state.counter <= 0) {
      clearInterval(this.interval)
        // When timer is done, the names disappear and
        // a person is selected randomly to generate question
        // images are shuffled
      this.setState({nameToggle: true})
      this.setState({textToggle: true})
      this.setState({onClickToggle: true})
      const randomIndex = _.random(0, this.props.info.length - 1)
      this.props.getRandomPerson(this.props.info[randomIndex])
      this.props.shuffleImages(this.props.info)
    }
  }

  onClick (img) {
    this.props.info.map(person => {
      if (img.id === this.props.randomPerson.id && person.id === img.id) {
        person.type = 'img-wrapper-ok'
        if (this.props.round === 4) {
          this.props.bonusPoints()
        } else {
          this.props.addPoints()
        }
      } else if (img.id !== this.props.randomPerson.id && person.id === img.id) {
        this.props.randomPerson.type = 'img-wrapper-ok'
        person.type = 'img-wrapper-wrong'
      } else {
        person.type = 'people'
      }
    })
    this.setState({onClickToggle: false})
  }

  render () {
    const round = this.props.round
    const user = this.props.userName
    const score = this.props.userScore
    const people = this.props.info
    const randomPerson = this.props.randomPerson
    const nameToggle = this.state.nameToggle
    const textToggle = this.state.nameToggle
    const onClickToggle = this.state.onClickToggle
    const getRoundNumber = this.props.getRoundNumber

    return (
    <div>
      {score === 4 ? <div className="mui--text-display3">Bonus Round</div>
      : <div className="mui--text-display3">Round {round}</div>}
      <div className="mui--text-display2">{user} score {score}</div>
      <Panel className='row'>
        {textToggle ? <h2>Who is {randomPerson.firstName + ' ' + randomPerson.lastName}?</h2>
        : null}
        <div className='row mui--text-title'>
        {people ? people.map((personImage, i) => <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 game-board' key={i}>
          <div className='person-name' style={nameToggle ? {display: 'none'} : null}>{personImage.firstName + ' ' + personImage.lastName}</div>
            <div className={personImage.type} >
              <img className='img-responsive img'
                  src={personImage.headshot.url}
                  onClick={onClickToggle ? () => { this.onClick(personImage) } : null}
              />
            </div>
          </div>) : null}
        </div>
      </Panel>
      <Pager>
          {textToggle ? <Pager.Item next href="#" onSelect={() => {
            getRoundNumber()
            round === 4 ? browserHistory.push('/end') : browserHistory.push('/round')
          }}>Next Round &rarr;</Pager.Item> : null}
      </Pager>
    </div>
    )
  }
}
