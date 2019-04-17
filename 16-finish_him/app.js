console.log('Finish Him')


var spiner = function(string) {
  lowerCasedAndUnderScored = string.toLowerCase().split(' ').join('_')
  console.log(lowerCasedAndUnderScored)
}

spiner("The_Andy_Griffith_Show")