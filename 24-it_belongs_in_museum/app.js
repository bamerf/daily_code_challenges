console.log('It Belongs in A Museum')

// Examples
var map1 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","X","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"]
];

var map2 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","X","A","A","A"]
];

var map3 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["A","A","A","V","A"],
  ["v","v","V","v","X"],
  ["A","V","A","A","A"]
];

var map4 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["A","A","A","V","A"],
  ["v","v","V","v","A"],
  ["X","V","A","A","A"]
];

// Bonus Example
var holyGrailMap = [
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","G","v","S","S"],
  ["v","v","H","v","S","S"],
  ["v","v","V","v","S","S"],
  ["A","V","A","A","A","S"]
];


function treasureFinder(map, key) {
  
  arraysIndex = []

  map.forEach(function(array) {
    array.forEach(function(innerArray){
      if (innerArray === key) {
        arraysIndex.push(map.indexOf(array))
        arraysIndex.push(array.indexOf(innerArray))
      }
    })
  })

  if (arraysIndex.length > 2) {
    console.log("That doesn't belong in a museum")
  } else {
    console.log(arraysIndex)
  }

}

treasureFinder(holyGrailMap, "G")