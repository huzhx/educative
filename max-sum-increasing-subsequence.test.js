import getMaxIncreasingSubsequenceSum from './max-sum-increasing-subsequence';

test('test1', () => {
  const input = [4, 1, 2, 6, 10, 1, 12];
  const expected = 32;
  const result = getMaxIncreasingSubsequenceSum(input);
  expect(result).toBe(expected);
});

test('test2', () => {
  const input = [-4, 10, 3, 7, 15];
  const expected = 25;
  const result = getMaxIncreasingSubsequenceSum(input);
  expect(result).toBe(expected);
});
