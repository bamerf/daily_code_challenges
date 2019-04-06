console.log('A Wolf in Sheeps Clothing')

var animal = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]

var newAnimal = animal.slice(0)
var animalReveresed = newAnimal.reverse()
var wolfIndex = animalReveresed.indexOf("wolf")


var sheepInFrontOfWolf = wolfIndex - 1;

if (animalReveresed[animalReveresed.length - 1] === "wolf") {
  console.log('Pls go away and stop eating my sheep')
} else {
  console.log(`Oi! Sheep number ${sheepInFrontOfWolf + 1}! You are about to be eaten by a wolf!`)
}