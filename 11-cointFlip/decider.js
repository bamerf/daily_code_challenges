console.log('Coin Flip')
var sides = ['HEADS', 'TAILS']
var headCounter = 0;
var tailCounter = 0;

var coinFlip = function() {
  var flipped = Math.floor(Math.random() * sides.length);
  if (sides[flipped] === 'HEADS') {
    headCounter++
  } else {
    tailCounter++
  }
  console.log(sides[flipped])
}

var winner = function() {
  if (headCounter === 5) {
    console.log('WINNER IS: HEADS')
    image.src = "images/heads.jpg"
  } else if (tailCounter === 5) {
    console.log('WINNER IS: TAILS')
    image.src = "images/tails.jpg"
  }
}

var decideWinner = function() {
  while (headCounter < 5 && tailCounter < 5) {
  coinFlip()
  winner()
  }
}

var image = document.querySelector('.image')

image.addEventListener('click', decideWinner)