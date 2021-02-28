import getLRSLength from './longest-repeating-subsequence';

test('test1', () => {
  const input = 'tomorrow';
  const result = getLRSLength(input);
  const expected = 2;
  expect(result).toBe(expected);
});

test('test2', () => {
  const input = 'aabdbcec';
  const result = getLRSLength(input);
  const expected = 3;
  expect(result).toBe(expected);
});

test('test3', () => {
  const input = 'fmff';
  const result = getLRSLength(input);
  const expected = 2;
  expect(result).toBe(expected);
});
