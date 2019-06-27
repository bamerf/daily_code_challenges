const addBinary = require('./add_binary');

test('is 0', () => {
  expect(addBinary(0, 0)).toBe('0');
});

test('under 10', () => {
  expect(addBinary(1, 2)).toBe('11');
});

test('under 100', () => {
  expect(addBinary(25, 25)).toBe('110010');
});

test('under 1000', () => {
  expect(addBinary(430, 310)).toBe('1011100100');
});

test('under 1000000', () => {
  expect(addBinary(500000, 385000)).toBe('11011000000100001000');
});

test('is not a number', () => {
  expect(addBinary('one', 'two')).toBe('Input needs to be a number');
});
