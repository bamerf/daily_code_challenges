console.log('Granny Talk')

var grannyTalk = function(userInput) {
    var randomYear = function(min, max) {
        return Math.floor(Math.random() * (+max - +min) + +min) ;
    }
    var grannyYear = randomYear(1930, 1950)
    if (userInput === 'BYE') {
        console.log('What\'s that honey, I didn\'t hear you')
    } else if (userInput === userInput.toUpperCase()) {
        console.log(`NO, NOT SINCE ${grannyYear}`)
    } else {
        console.log('SPEAK UP SONNY JIM')
    }
}


grannyTalk('SKJAKDJKAD')
