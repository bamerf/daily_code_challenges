console.log('A Wolf in Sheeps Clothing')

var sheeps = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]

var wolfIndex = sheeps.indexOf("wolf")

var sheepInFrontOfWolf = wolfIndex - 1;

if (sheeps[sheeps.length - 1] === "wolf") {
  console.log('Pls go away and stop eating my sheep')
} else {
  console.log(`Oi! Sheep number ${sheepInFrontOfWolf + 1}! You are about to be eaten by a wolf!`)
}