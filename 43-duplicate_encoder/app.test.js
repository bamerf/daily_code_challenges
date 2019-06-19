const duplicateEncode = require('./app');

test('no duplicates', () => {
  expect(duplicateEncode('din')).toBe('(((');
});

test('with duplicates', () => {
  expect(duplicateEncode('recede')).toBe('()()()');
});

test('with uppercase', () => {
  expect(duplicateEncode('Success')).toBe(')())())');
});

test('with spaces and special characters', () => {
  expect(duplicateEncode('(( @)')).toBe('))((');
});
