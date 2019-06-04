romanNums = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  1000: 'M'
};
number = 4;

const toRoman = number => {
  if (number > 5 && number < 9) {
    i = number % 5;
    return `${romanNums['5']}${romanNums[i]}`;
  } else if (number > 10 && number < 20) {
    i = number % 10;
    return `${romanNums['10']}${romanNums[i]}`;
  } else if (number > 20 && number < 40) {
    return `${romanNums['10'].repeat()}`;
  } else {
    return romanNums[number.toString()];
  }
};

module.exports = toRoman;
