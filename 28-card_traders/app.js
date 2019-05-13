cards = {
  Pikachu: 40,
  Ratta: 20,
  Pidgeot: 60,
  Alakazam: 80,
  Butterfree: 30,
  Gengar: 70,
  Moltres: 100,
  Vulpix: 40,
  Blastoise: 80,
  Hitmonchan: 50
}

players = {
  alfred: {
    alfredCards: []
  },
  peter : {
    peterCards: []
  }
}

shuffle = (Object.keys(cards))

shuffle.reverse()

cardGroups = {
  groupOne: [],
  groupTwo: [],
  groupThree: [],
  groupFour: []
}

cardGroups.groupOne.push(shuffle[0], shuffle[1], shuffle[2])
cardGroups.groupTwo.push(shuffle[3], shuffle[4], shuffle[5])
cardGroups.groupThree.push(shuffle[6], shuffle[7], shuffle[8])
cardGroups.groupFour.push(shuffle[9])

players.alfred.alfredCards = cardGroups.groupOne
players.peter.peterCards = cardGroups.groupTwo

winningNumber = Math.ceil(Math.random() * 10)

if (winningNumber <= 3) {
  console.log("Alfred Wins")
  players.alfred.alfredCards.push(cardGroups.groupThree[0], cardGroups.groupThree[1], cardGroups.groupThree[2])
  players.peter.peterCards.push(cardGroups.groupFour[0])
} else {
  console.log("Peter Wins")
  players.peter.peterCards.push(cardGroups.groupThree[0], cardGroups.groupThree[1], cardGroups.groupThree[2])
  players.alfred.alfredCards.push(cardGroups.groupFour[0])
}

console.log(players.alfred.alfredCards)
console.log(players.peter.peterCards)