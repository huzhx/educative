import { findLASLengthBottomUp, findLASLengthTopDown } from './longest-alternating-subsequence';

test('test1', () => {
  const input = [1, 7, 4, 9, 2, 5];
  const expected = 6;
  const result = findLASLengthTopDown(input);
  expect(result).toBe(expected);
});

test('test2', () => {
  const input = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
  const expected = 7;
  const result = findLASLengthTopDown(input);
  expect(result).toBe(expected);
});

test('test3', () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const expected = 2;
  const result = findLASLengthTopDown(input);
  expect(result).toBe(expected);
});

test('test4', () => {
  const input = [1, 7, 4, 9, 2, 5];
  const expected = 6;
  const result = findLASLengthBottomUp(input);
  expect(result).toBe(expected);
});

test('test5', () => {
  const input = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
  const expected = 7;
  const result = findLASLengthBottomUp(input);
  expect(result).toBe(expected);
});

test('test6', () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const expected = 2;
  const result = findLASLengthBottomUp(input);
  expect(result).toBe(expected);
});
