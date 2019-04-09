// Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:
// var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

var words = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// for (i = 0; i < words.length; i++) {
//   for (j = 0; j < geese.length; j++) {
//     if (words[i] === geese[j]) {
//       filtered.push(words[i])
//     }
//   }
// }

// for (i = 0; i < filtered.length; i++) {
//   var indexOfWords = words.indexOf(filtered[i])
//   words.splice(indexOfWords, 1)
// }

var filtered = words.filter(function(bird) {
  return geese.indexOf(bird) === -1
})

console.log(filtered)