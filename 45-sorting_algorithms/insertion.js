const insertionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    let j;

    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
};

console.log(insertionSort([54, 26, 93, 17, 77, 31, 44, 55, 20]));
