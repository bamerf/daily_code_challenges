const findDuplicate = require('./findDuplicate');

test('find duplicate', () => {
  expect(findDuplicate([6, 7, 4, 5, 3, 5, 1])).toBe(5);
});

test('find duplicate', () => {
  expect(findDuplicate([6, 7, 4, 3, 5, 1])).toStrictEqual([]);
});
