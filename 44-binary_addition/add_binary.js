addBinary = (a, b) => {
  // You can do this (a+b).toString(2) but I aimed to figure out the conversion rather than the shortcut

  let number = a + b;

  // To check input
  if (typeof number != 'number') {
    return 'Input needs to be a number';
  } else if (number === 0) {
    return '0';
  }
  numberBroken = [];
  binary = [];
  power = 0;

  // To find out the maximum powers of two that can fit in number
  while (number > Math.pow(2, power)) {
    numberBroken.push(Math.pow(2, power));
    power++;
  }

  // Deduct power numbers from number from biggest to smallest and assign 1 or 0 accordingly
  numberBroken.reverse().forEach(brokenNumber => {
    if (brokenNumber <= number) {
      number = number - brokenNumber;
      binary.push('1');
    } else {
      binary.push('0');
    }
  });
  return binary.join('');
};

module.exports = addBinary;
