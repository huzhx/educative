import { getMinDiff } from './min-subset-sum-diff';

test('test1', () => {
  const nums = [1, 2, 3, 9];
  const result = getMinDiff(nums);
  const expected = 3;
  expect(result).toBe(expected);
});

test('test1', () => {
  const nums = [1, 2, 7, 1, 5];
  const result = getMinDiff(nums);
  const expected = 0;
  expect(result).toBe(expected);
});

test('test1', () => {
  const nums = [1, 3, 100, 4];
  const result = getMinDiff(nums);
  const expected = 92;
  expect(result).toBe(expected);
});
