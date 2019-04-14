console.log('The Board')

var char = '#'
var space = ' '
var size = 8;

var createPattern = function(size) {
  for (i = 0; i < 8; i++) {
    if (i % 2 === 0) {
      var charFirst = char + space;
      console.log(charFirst.repeat(size))
    } else {
      var SpaceFirst = space + char;
      console.log(SpaceFirst.repeat(size))
    }
  }
}
createPattern(size);