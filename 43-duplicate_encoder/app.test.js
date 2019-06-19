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

test('spacial characters whitespace', () => {
  expect(duplicateEncode('(( @')).toBe('))((');
});
