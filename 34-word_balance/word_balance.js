const letterWeight = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

const getLetterWeight = (letter) => {
  return letterWeight[letter];
}


const getBalancePoint = (word) => {

  let array = word.toLowerCase().split('').map( arrayLetter => {
    return getLetterWeight(arrayLetter);
  })

  for (balancePoint = 1; balancePoint < (array.length - 1); balancePoint++) {

    let weightLeft = 0;
    let weightRight = 0;

    for (indexLeft = 0; indexLeft < balancePoint; indexLeft++) {
      weightLeft += array[indexLeft] * (balancePoint - indexLeft);
    }

    for (indexRight = array.length -1; indexRight > balancePoint; indexRight--) {
      weightRight += array[indexRight] * (indexRight - balancePoint);
    }

    if (weightLeft == weightRight) {
      return (`Balance Point is: ${word[balancePoint]}`)
    }
  }
}

console.log(getBalancePoint('CONSUBSTANTIATION'))