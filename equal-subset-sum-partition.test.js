import { canPartition, topDown } from './equal-subset-sum-partition';

test('test1', () => {
  const nums = [1, 2, 3, 4];
  const result = canPartition(nums);
  const expected = true;
  expect(result).toBe(expected);
});

test('test-topDown-1', () => {
  const nums = [1, 2, 3, 4];
  const result = topDown(nums);
  const expected = true;
  expect(result).toBe(expected);
});
