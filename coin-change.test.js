import getNumOfCombinations from './coin-change';

test('test1', () => {
  const denominations = [1, 2, 3];
  const total = 5;
  const expected = 5;
  const result = getNumOfCombinations(denominations, total);
  expect(result).toBe(expected);
});
