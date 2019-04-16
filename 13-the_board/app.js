console.log('The Board')

var space = ' '

var createPattern = function(size, symbol) {
  for (row = 0; row < size; row++) {
    if (row % 2 === 0) {
      var symbolFirst = symbol + space;
      console.log(symbolFirst.repeat(size))
    } else {
      var spaceFirst = space + symbol;
      console.log(spaceFirst.repeat(size))
    }
  }
}
createPattern(8, '|');