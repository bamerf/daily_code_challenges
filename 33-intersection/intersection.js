
threeWayIntersection = (array1, array2, array3) => {

  return array1.filter(number => array2.includes(number) && array3.includes(number))
  
}

console.log(threeWayIntersection([1,3,4,6], [2,3,4,7], [3,4,7,8,9]))


InfiniteWayIntersection = (...args) => {

  filtered = args[0]

  args.forEach(function(array) {

    filtered = array.filter(number =>
      filtered.includes(number))

  })

  console.log(filtered)
}

InfiniteWayIntersection([1, 2, 5], [2, 3, 4, 5], [2, 4, 5], [2, 3, 7, 8, 9, 5])