console.log('Mini Golf')

var playerScore = function(name, score) {
  var sumScore = score.reduce(function(a, b) {
    return a + b
  })
  if (name === 'bob') {
    var bobScore = sumScore
    return bobScore
  } else if (name === 'jimbo') {
    var jimboScore = sumScore
    return jimboScore
  } else if (name === 'fish') {
    var fishScore = sumScore
    return fishScore
  } 
}

var bobscore = playerScore('bob', [3, 2, 6, 11, 9, 2, 6, 9, 10])
var jimboScore = playerScore('jimbo', [5, 12, 9, 22, 13, 7, 16, 10, 11])
var fishScore = playerScore('fish', [2, 2, 4, 5, 4, 3, 6, 4, 1])

var totalScore = function() {
  var totalScore = bobscore + jimboScore + fishScore
  console.log(`Bob's score is ${bobscore}, Jimbo's score is ${jimboScore} and Fish's score is ${fishScore}. and their total ascore is ${totalScore}`)
}

totalScore()

// BETTER CODE 
// var players = [
//   {name: 'Bob',
//    holeScores: [3, 2, 6, 11, 9, 2, 6, 9, 10] 
//   },
//   {name: 'Jimbo',
//    holeScores: [5, 12, 9, 22, 13, 7, 16, 10, 11] 
//   },
//   {name: 'Fish',
//    holeScores: [2, 2, 4, 5, 4, 3, 6, 4, 1] 
//   }
// ]

// var totalScores = function(players) {  
//   for(var i = 0; i < players.length; i++) {
//       var total = 0;
//       for(var j = 0; j < players[i].holeScores.length; j++) {
//           total = total + players[i].holeScores[j];
//       }
//       console.log(`${players[i].name}'s score is ${total}`);
//   }  
// }

// totalScores(players);
