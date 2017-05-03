import axios from 'axios'
import { randomIndexes } from '../utils/utils'
import _ from 'lodash'
// ------------------ CONSTANTS ------------------
const GAME_INFO = 'GAME_INFO'
const ROUND_NUMBER = 'ROUND_NUMBER'
const SHUFFLE_IMAGES = 'SHUFFLE_IMAGES'
const GET_ONLY_MAT = 'GET_ONLY_MAT'
const GET_RANDOM_PERSON = 'GET_RANDOM_PERSON'
const ADD_POINTS = 'ADD_POINTS'
const BONUS_POINTS = 'BONUS_POINTS'
const USER_NAME = 'USER_NAME'
const CLEAR_ROUND_SCORE = 'CLEAR_ROUND_SCORE'
const CLEAR_INFO = 'CLEAR_INFO'

// ------------------ ACTION CREATORS ------------------
export const getGameInfo = (info) => {
  // get random indexes to display 6 images and names
  const randomIndex = randomIndexes(info)
  const roundImages = randomIndex.map(i => info[i])
  return ({type: GAME_INFO, roundImages})
}

export const getOnlyMatts = (info) => ({type: GET_ONLY_MAT, info})

export const getRoundNumber = () => ({type: ROUND_NUMBER})

export const shuffleImages = (info) => ({type: SHUFFLE_IMAGES, info})

export const getRandomPerson = (person) => ({type: GET_RANDOM_PERSON, person})

export const addPoints = () => ({type: ADD_POINTS})

export const bonusPoints = () => ({ type: BONUS_POINTS })

export const getUserName = (name) => ({type: USER_NAME, name})

export const clearRoundScore = () => ({type: CLEAR_ROUND_SCORE})

export const clearInfo = (people) => ({type: CLEAR_INFO, people})

// ------------------ REDUCER ------------------
const initialState = {
  info: [],
  randomPerson: '',
  round: 1,
  user: {name: '', points: 0}
}
const gameReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    // get the images information for a round
    case GAME_INFO:
      newState.info = newState.info.concat(action.roundImages)
      return newState

    // get game round info
    case ROUND_NUMBER:
      newState.round += 1
      return newState

    case ADD_POINTS:
      newState.user.points += 50
      return newState

    case BONUS_POINTS:
      newState.user.points += 200
      return newState

    case GET_ONLY_MAT:
      newState.info = action.info
      return newState

    case GET_RANDOM_PERSON:
      newState.randomPerson = action.person
      return newState

    case SHUFFLE_IMAGES:
      newState.info = _.shuffle(action.info)
      return newState

    case USER_NAME:
      newState.user.name = action.name
      return newState

    case CLEAR_ROUND_SCORE:
      newState.round = 1
      newState.user.points = 0
      return newState

    case CLEAR_INFO:
      newState.info = action.people
      return newState

    default:
      return state
  }
}

export default gameReducer

// ------------------ DISPATCHERS ------------------

export const fetchGameInfo = () =>
  dispatch =>
    axios({
      method: 'get',
      url: 'https://willowtreeapps.com/api/v1.0/profiles/'
    })
    .then(response => {
      // a little bit of cleaning of the information
      var cleanedResponse = []
      response.data.items.forEach((element) => {
        if (element.hasOwnProperty('jobTitle') &&
        element.headshot.hasOwnProperty('url') &&
        (element.headshot.alt !== 'WillowTree default article featured image')) {
          cleanedResponse.push(element)
        }
      })
      dispatch(getGameInfo(cleanedResponse))
    })
    .catch(err => console.error(err))


// get people and filter matts
export const getInfoFilterMatts = () =>
  dispatch =>
    axios({
      method: 'get',
      url: 'https://willowtreeapps.com/api/v1.0/profiles/'
    })
    .then(response => {
      // a little bit of cleaning of the information
      var cleanedResponse = []
      response.data.items.forEach((element) => {
        if (element.hasOwnProperty('jobTitle') &&
        element.headshot.hasOwnProperty('url') &&
        (element.headshot.alt !== 'WillowTree default article featured image')) {
          cleanedResponse.push(element)
        }
      })
      // filter only matts
      var matts = cleanedResponse.filter(person => {
        if (person.firstName.match(/Matt/i) || person.firstName.match(/Mat/i)) {
          return person
        }
      })
      dispatch(getOnlyMatts(matts))
    })
    .catch(err => console.error(err))
