
export const shuffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return [...array]
}

export const randomIndexes = (array) => {
  var indexes = []
  for (let i = 0; i < 6; i++) {
    var randomNumber = Math.floor(Math.random() * (array.length - 1) + 1)
    indexes.push(randomNumber)
    var half1 = array.slice(0, randomNumber)
    var half2 = array.slice(randomNumber + 1, array.length)
    array = half1.concat(half2)
  }
  return indexes
}
