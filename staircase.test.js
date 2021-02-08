import getPossibleWaysNumber from './staircase';

test('test1', () => {
  const stairsNumber = 3;
  const expected = 4;
  const result = getPossibleWaysNumber(stairsNumber);
  expect(result).toBe(expected);
});

test('test2', () => {
  const stairsNumber = 4;
  const expected = 7;
  const result = getPossibleWaysNumber(stairsNumber);
  expect(result).toBe(expected);
});

test('test3', () => {
  const stairsNumber = 5;
  const expected = 13;
  const result = getPossibleWaysNumber(stairsNumber);
  expect(result).toBe(expected);
});
