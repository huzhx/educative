import { topDown, bottomUp } from './levenshtein-distance';

test('test-topDown-1', () => {
  const str1 = 'kitten';
  const str2 = 'sitting';
  const expected = 3;
  const result = topDown(str1, str2);
  expect(result).toBe(expected);
});

test('test-bottomUp-1', () => {
  const str1 = 'kitten';
  const str2 = 'sitting';
  const expected = 3;
  const result = bottomUp(str1, str2);
  expect(result).toBe(expected);
});

test('test-topDown-2', () => {
  const str1 = 'intention';
  const str2 = 'execution';
  const expected = 5;
  const result = topDown(str1, str2);
  expect(result).toBe(expected);
});

test('test-bottomUp-2', () => {
  const str1 = 'intention';
  const str2 = 'execution';
  const expected = 5;
  const result = bottomUp(str1, str2);
  expect(result).toBe(expected);
});

test('test-topDown-3', () => {
  const str1 = 'horse';
  const str2 = 'ros';
  const expected = 3;
  const result = topDown(str1, str2);
  expect(result).toBe(expected);
});

test('test-bottomUp-3', () => {
  const str1 = 'horse';
  const str2 = 'ros';
  const expected = 3;
  const result = bottomUp(str1, str2);
  expect(result).toBe(expected);
});
