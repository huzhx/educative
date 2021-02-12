import getMinDeletions from './min-del-palindrome';

test('test1', () => {
  const string = 'abdbca';
  const result = getMinDeletions(string);
  const expected = 1;
  expect(result).toBe(expected);
});

test('test2', () => {
  const string = 'pqr';
  const result = getMinDeletions(string);
  const expected = 2;
  expect(result).toBe(expected);
});

test('test3', () => {
  const string = 'cddpd';
  const result = getMinDeletions(string);
  const expected = 2;
  expect(result).toBe(expected);
});