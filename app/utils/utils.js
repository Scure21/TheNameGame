import _ from 'lodash'

export const randomIndexes = (array) => {
  var indexes = []
  for (let i = 0; i < 6; i++) {
    var randomNumber = _.random(0, array.length - 1)
    indexes.push(randomNumber)
  }
  var newSet = new Set(indexes)
  return [...newSet]
}
