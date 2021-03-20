import { topDown, bottomUp, divideAndConquer } from './largest-sum-subarray';

test('test-topDown-1', () => {
  const nums = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
  const expected = 12;
  const result = topDown(nums);
  expect(result).toBe(expected);
});

test('test-bottomUp-1', () => {
  const nums = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
  const expected = 12;
  const result = bottomUp(nums);
  expect(result).toBe(expected);
});

test('test-divideAndConquer-1', () => {
  const nums = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
  const expected = 12;
  const result = divideAndConquer(nums);
  expect(result).toBe(expected);
});

test('test-topDown-2', () => {
  const nums = [-4, -2, -5, -1, -2, -3, -6, -5, -1];
  const expected = -1;
  const result = topDown(nums);
  expect(result).toBe(expected);
});

test('test-bottomUp-2', () => {
  const nums = [-4, -2, -5, -1, -2, -3, -6, -5, -1];
  const expected = -1;
  const result = bottomUp(nums);
  expect(result).toBe(expected);
});

test('test-divideAndConquer-2', () => {
  const nums = [-4, -2, -5, -1, -2, -3, -6, -5, -1];
  const expected = -1;
  const result = divideAndConquer(nums);
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

test('test-divideAndConquer-3', () => {
  const nums = [];
  const expected = 0;
  const result = divideAndConquer(nums);
  expect(result).toBe(expected);
});

test('test-topDown-4', () => {
  const nums = [-23];
  const expected = -23;
  const result = topDown(nums);
  expect(result).toBe(expected);
});

test('test-bottomUp-4', () => {
  const nums = [-23];
  const expected = -23;
  const result = bottomUp(nums);
  expect(result).toBe(expected);
});

test('test-divideAndConquer-4', () => {
  const nums = [-23];
  const expected = -23;
  const result = divideAndConquer(nums);
  expect(result).toBe(expected);
});

test('test-topDown-5', () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const expected = 6;
  const result = topDown(nums);
  expect(result).toBe(expected);
});

test('test-bottomUp-5', () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const expected = 6;
  const result = bottomUp(nums);
  expect(result).toBe(expected);
});

test('test-divideAndConquer-5', () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const expected = 6;
  const result = divideAndConquer(nums);
  expect(result).toBe(expected);
});
