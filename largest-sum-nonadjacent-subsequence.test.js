import { topDown, bottomUp, bottomUpSpaceOptimization } from './largest-sum-nonadjacent-subsequence';

test('test-topDown-1', () => {
  const nums = [1, 6, 10, 14, -5, -1, 2, -1, 3];
  const expected = 25;
  const result = topDown(nums);
  expect(result).toBe(expected);
});

test('test-bottomUp-1', () => {
  const nums = [1, 6, 10, 14, -5, -1, 2, -1, 3];
  const expected = 25;
  const result = bottomUp(nums);
  expect(result).toBe(expected);
});

test('test-bottomUpSpaceOptimization-1', () => {
  const nums = [1, 6, 10, 14, -5, -1, 2, -1, 3];
  const expected = 25;
  const result = bottomUpSpaceOptimization(nums);
  expect(result).toBe(expected);
});

test('test-topDown-2', () => {
  const nums = [1, -1, 6, -4, 2, 2];
  const expected = 9;
  const result = topDown(nums);
  expect(result).toBe(expected);
});

test('test-bottomUp-2', () => {
  const nums = [1, -1, 6, -4, 2, 2];
  const expected = 9;
  const result = bottomUp(nums);
  expect(result).toBe(expected);
});

test('test-bottomUpSpaceOptimization-2', () => {
  const nums = [1, -1, 6, -4, 2, 2];
  const expected = 9;
  const result = bottomUpSpaceOptimization(nums);
  expect(result).toBe(expected);
});

test('test-topDown-3', () => {
  const nums = [];
  const expected = 0;
  const result = topDown(nums);
  expect(result).toBe(expected);
});

test('test-bottomUp-3', () => {
  const nums = [];
  const expected = 0;
  const result = bottomUp(nums);
  expect(result).toBe(expected);
});

test('test-bottomUpSpaceOptimization-3', () => {
  const nums = [];
  const expected = 0;
  const result = bottomUpSpaceOptimization(nums);
  expect(result).toBe(expected);
});

test('test-topDown-4', () => {
  const nums = [-1];
  const expected = -1;
  const result = topDown(nums);
  expect(result).toBe(expected);
});

test('test-bottomUp-4', () => {
  const nums = [-1];
  const expected = -1;
  const result = bottomUp(nums);
  expect(result).toBe(expected);
});

test('test-bottomUpSpaceOptimization-4', () => {
  const nums = [-1];
  const expected = -1;
  const result = bottomUpSpaceOptimization(nums);
  expect(result).toBe(expected);
});

test('test-topDown-5', () => {
  const nums = [-1, -2, -3, -1];
  const expected = -1;
  const result = topDown(nums);
  expect(result).toBe(expected);
});

test('test-bottomUp-5', () => {
  const nums = [-1, -2, -3, -1];
  const expected = -1;
  const result = bottomUp(nums);
  expect(result).toBe(expected);
});

test('test-bottomUpSpaceOptimization-5', () => {
  const nums = [-1, -2, -3, -1];
  const expected = -1;
  const result = bottomUpSpaceOptimization(nums);
  expect(result).toBe(expected);
});
