const quickSort = (arr, left, right) => {
  let index;

  if (arr.length > 1) {
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? arr.length - 1 : right;

    index = partition(arr, left, right);

    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }

    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
};

const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((right + left) / 2)];
  i = left;
  j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const swap = (arr, firstIndex, SecondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[SecondIndex];
  arr[SecondIndex] = temp;
};

console.log(
  quickSort([
    2,
    4,
    6,
    4,
    33,
    2,
    1,
    -6,
    3,
    2,
    245,
    78,
    8,
    6,
    5454,
    32,
    54,
    7,
    68,
    9,
    89,
    34,
    23,
    13,
    465,
    23
  ])
);
