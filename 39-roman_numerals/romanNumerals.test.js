const toRoman = require('./romanNumerals');

test('3', () => {
  expect(toRoman(3)).toEqual('III');
});

test('5', () => {
  expect(toRoman(5)).toEqual('V');
});

test('4', () => {
  expect(toRoman(4)).toEqual('IV');
});

test('6', () => {
  expect(toRoman(6)).toEqual('VI');
});

test('8', () => {
  expect(toRoman(8)).toEqual('VIII');
});

test('9', () => {
  expect(toRoman(9)).toEqual('IX');
});

test('10', () => {
  expect(toRoman(10)).toEqual('X');
});

test('12', () => {
  expect(toRoman(12)).toEqual('XII');
});

test('15', () => {
  expect(toRoman(15)).toEqual('XV');
});

test('17', () => {
  expect(toRoman(17)).toEqual('XVII');
});

test('18', () => {
  expect(toRoman(18)).toEqual('XVIII');
});

test('19', () => {
  expect(toRoman(19)).toEqual('XIX');
});

test('22', () => {
  expect(toRoman(22)).toEqual('XXII');
});

test('89', () => {
  expect(toRoman(89)).toEqual('LXXXIX');
});

test('55', () => {
  expect(toRoman(55)).toEqual('LV');
});

test('67', () => {
  expect(toRoman(67)).toEqual('LXVII');
});

test('2890', () => {
  expect(toRoman(2890)).toEqual('MMDCCCXC');
});
