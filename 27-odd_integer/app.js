numbers = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

function FindOddOccurences(arrayOfNums) {

  arrayOfNums.forEach(function(number) {
  
    newArray = []
    newArray.push(number)
  
    arrayOfNums.forEach(function(number) {
      if (newArray[0] === number) {
        newArray.push(number)
      }
    })
    
    if (newArray.length % 2 === 0) {
      console.log(number)
    }
  
  })

}

FindOddOccurences(numbers)