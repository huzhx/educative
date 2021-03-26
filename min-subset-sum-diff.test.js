import { getMinDiff, topDown } from './min-subset-sum-diff';

test('test1', () => {
  const nums = [1, 2, 3, 9];
  const result = getMinDiff(nums);
  const expected = 3;
  expect(result).toBe(expected);
});

test('test-topDown-1', () => {
  const nums = [1, 2, 3, 9];
  const result = topDown(nums);
  const expected = 3;
  expect(result).toBe(expected);
});

test('test2', () => {
  const nums = [1, 2, 7, 1, 5];
  const result = getMinDiff(nums);
  const expected = 0;
  expect(result).toBe(expected);
});

test('test-topDown-2', () => {
  const nums = [1, 2, 7, 1, 5];
  const result = topDown(nums);
  const expected = 0;
  expect(result).toBe(expected);
});

test('test3', () => {
  const nums = [1, 3, 100, 4];
  const result = getMinDiff(nums);
  const expected = 92;
  expect(result).toBe(expected);
});

test('test-topDown-3', () => {
  const nums = [1, 3, 100, 4];
  const result = topDown(nums);
  const expected = 92;
  expect(result).toBe(expected);
});
