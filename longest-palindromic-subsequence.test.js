import findLPSLength from './longest-palindromic-subsequence';

test('test1', () => {
  const string = 'abdbca';
  const result = findLPSLength(string);
  const expected = 5;
  expect(result).toBe(expected);
});

test('test2', () => {
  const string = 'cddpd';
  const result = findLPSLength(string);
  const expected = 3;
  expect(result).toBe(expected);
});

test('test3', () => {
  const string = 'pqr';
  const result = findLPSLength(string);
  const expected = 1;
  expect(result).toBe(expected);
});
