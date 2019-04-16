

var villainMap = function (numOfRow, numOfColumns, Char) {

  map = []
  
  for (rIndex = 0; rIndex < numOfRow; rIndex++) {
    map.push([])
    for (cIndex = 0; cIndex < numOfColumns; cIndex++) {
      map[rIndex].push("A")
    }
  }
  randomRIndex = Math.floor(Math.random() * 5)
  randomCIndex = Math.floor(Math.random() * 5)
  map[randomRIndex][randomCIndex] = Char

  console.log(map)

}

console.log(villainMap(5, 5, "^"))