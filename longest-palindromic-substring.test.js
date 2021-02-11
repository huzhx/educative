import findLPSLength from './longest-palindromic-substring';

test('test1', () => {
  const input = 'abdbca';
  const expected = 3;
  const result = findLPSLength(input);
  expect(result).toBe(expected);
});

test('test2', () => {
  const input = 'cddpd';
  const expected = 3;
  const result = findLPSLength(input);
  expect(result).toBe(expected);
});

test('test3', () => {
  const input = 'pqr';
  const expected = 1;
  const result = findLPSLength(input);
  expect(result).toBe(expected);
});
