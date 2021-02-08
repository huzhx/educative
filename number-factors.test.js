import getNumberOfWays from './number-factors';

test('test1', () => {
  const n = 4;
  const expected = 4;
  const result = getNumberOfWays(n);
  expect(result).toBe(expected);
});

test('test2', () => {
  const n = 5;
  const expected = 6;
  const result = getNumberOfWays(n);
  expect(result).toBe(expected);
});
