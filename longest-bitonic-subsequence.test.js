import findLBSLength from './longest-bitonic-subsequence';

test('test1', () => {
  const nums = [4, 2, 3, 6, 10, 1, 12];
  const expected = 5;
  const result = findLBSLength(nums);
  expect(result).toBe(expected);
});

test('test2', () => {
  const nums = [4, 2, 5, 9, 7, 6, 10, 3, 1];
  const expected = 7;
  const result = findLBSLength(nums);
  expect(result).toBe(expected);
});
