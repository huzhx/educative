import { findMPPCuts, topDown } from './palindromic-partitioning';

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

test('test-topDown-1', () => {
  const string = 'abdbca';
  const expected = 3;
  const result = topDown(string);
  expect(result).toBe(expected);
});

test('test-topDown-2', () => {
  const string = 'cdpdd';
  const expected = 2;
  const result = topDown(string);
  expect(result).toBe(expected);
});

test('test-topDown-3', () => {
  const string = 'pqr';
  const expected = 2;
  const result = topDown(string);
  expect(result).toBe(expected);
});

test('test-topDown-4', () => {
  const string = 'pp';
  const expected = 0;
  const result = topDown(string);
  expect(result).toBe(expected);
});

test('test-topDown-5', () => {
  const string = 'aaaabaaabaaabbbaaaabbaaa';
  const expected = 3;
  const result = topDown(string);
  expect(result).toBe(expected);
});
