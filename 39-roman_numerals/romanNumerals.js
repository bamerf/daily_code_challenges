romanNums = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};
number = 4;

const toRoman = number => {
  let roman = '';
  for (let i in romanNums) {
    while (number >= romanNums[i]) {
      roman += i;
      number -= romanNums[i];
    }
  }
  console.log(roman);
  return roman;
};

module.exports = toRoman;
