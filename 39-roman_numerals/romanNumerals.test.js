const toRoman = require('./romanNumerals');

test('primitive numbers', () => {
  expect(toRoman(3)).toEqual('III');
});

test('primitive numbers', () => {
  expect(toRoman(5)).toEqual('V');
});

test('primitive numbers', () => {
  expect(toRoman(4)).toEqual('IV');
});

test('primitive numbers', () => {
  expect(toRoman(6)).toEqual('VI');
});

test('primitive numbers', () => {
  expect(toRoman(8)).toEqual('VIII');
});

test('primitive numbers', () => {
  expect(toRoman(9)).toEqual('IX');
});

test('primitive numbers', () => {
  expect(toRoman(10)).toEqual('X');
});

test('primitive numbers', () => {
  expect(toRoman(12)).toEqual('XII');
});

test('primitive numbers', () => {
  expect(toRoman(12)).toEqual('XII');
});

test('primitive numbers', () => {
  expect(toRoman(15)).toEqual('XV');
});

test('primitive numbers', () => {
  expect(toRoman(19)).toEqual('XIX');
});

test('primitive numbers', () => {
  expect(toRoman(22)).toEqual('XXII');
});
