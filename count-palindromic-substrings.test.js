import countPalindromicSubstrings from './count-palindromic-substrings';

test('test1', () => {
  const string = 'abdbca';
  const result = countPalindromicSubstrings(string);
  const expected = 7;
  expect(result).toBe(expected);
});

test('test2', () => {
  const string = 'abcd';
  const result = countPalindromicSubstrings(string);
  const expected = 4;
  expect(result).toBe(expected);
});