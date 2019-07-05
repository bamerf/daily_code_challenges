
var users = [
  { id: 1, username: "Apple", active: true,  age: 20 },
  { id: 2, username: "Banana", active: false, age: 35 },
  { id: 3, username: "Ear", active: false, age: 60 },
  { id: 4, username: "Dog", active: true,  age: 65 },
  { id: 5, username: "Cat", active: true,  age: 80 },
  { id: 6, username: "Ear", active: true,  age: 95 },
];

array_ear = users.filter(user => user.username == "Ear")

array_age_over_60 = users.filter(user => user.age >= 60)

array_ids = users.map(user => user.id)

average_age = users.map(user => user.age).reduce((accu, curr) => accu + curr / array_ids.length)

sorted_array = users.sort(function(a, b) {
  var nameA = a.username.toLowerCase()
  var nameB = b.username.toLowerCase()
    if (nameA < nameB)
        return -1 
    if (nameA > nameB)
        return 1
    return 0
})

var words = [
  "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "I see no X here", "I am a developer"
];

words.forEach(function(word, index){
  if(index > 0) {
    console.log(word)
  }
})

console.log(words.filter(word => word.length > 5).length)

// words.forEach(word => {
//   console.log(word.charAt(0).toUpperCase() + word.slice(1))
// })

capitalise = words.map(word =>
  word.charAt(0).toUpperCase() + word.slice(1)
)