import findMPPCuts from './palindromic-partitioning';

test('test1', () => {
  const string = 'abdbca';
  const expected = 3;
  const result = findMPPCuts(string);
  expect(result).toBe(expected);
});

test('test2', () => {
  const string = 'cdpdd';
  const expected = 2;
  const result = findMPPCuts(string);
  expect(result).toBe(expected);
});

test('test3', () => {
  const string = 'pqr';
  const expected = 2;
  const result = findMPPCuts(string);
  expect(result).toBe(expected);
});

test('test4', () => {
  const string = 'pp';
  const expected = 0;
  const result = findMPPCuts(string);
  expect(result).toBe(expected);
});

test('test5', () => {
  const string = 'aaaabaaabaaabbbaaaabbaaa';
  const expected = 3;
  const result = findMPPCuts(string);
  expect(result).toBe(expected);
});