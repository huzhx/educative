import { findMinOperationsTopDown } from './edit-distance';

test('test1', () => {
  const str1 = 'bat';
  const str2 = 'but';
  const expected = 1;
  const result = findMinOperationsTopDown(str1, str2);
  expect(result).toBe(expected);
});

test('test2', () => {
  const str1 = 'abdca';
  const str2 = 'cbda';
  const expected = 2;
  const result = findMinOperationsTopDown(str1, str2);
  expect(result).toBe(expected);
});

test('test3', () => {
  const str1 = 'passpot';
  const str2 = 'ppsspqrt';
  const expected = 3;
  const result = findMinOperationsTopDown(str1, str2);
  expect(result).toBe(expected);
});
