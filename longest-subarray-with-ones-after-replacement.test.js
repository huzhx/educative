import { topDown, greedy } from './longest-subarray-with-ones-after-replacement';

test('test-topDown-1', () => {
  const arr = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1];
  const k = 2;
  const result = topDown(arr, k);
  const expected = 6;
  expect(result).toBe(expected);
});

test('test-greedy-1', () => {
  const arr = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1];
  const k = 2;
  const result = greedy(arr, k);
  const expected = 6;
  expect(result).toBe(expected);
});

test('test-topDown-2', () => {
  const arr = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1];
  const k = 3;
  const result = topDown(arr, k);
  const expected = 9;
  expect(result).toBe(expected);
});

test('test-greedy-2', () => {
  const arr = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1];
  const k = 3;
  const result = greedy(arr, k);
  const expected = 9;
  expect(result).toBe(expected);
});
