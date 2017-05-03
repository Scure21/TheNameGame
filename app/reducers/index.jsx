import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  game: require('./game').default,
})

export default rootReducer
