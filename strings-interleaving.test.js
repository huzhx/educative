import { isInterleaved } from './strings-interleaving';

test('test1', () => {
  const m = 'abd';
  const n = 'cef';
  const p = 'abcdef';
  const result = isInterleaved(m, n, p);
  expect(result).toBeTruthy();
});

test('test2', () => {
  const m = 'abd';
  const n = 'cef';
  const p = 'adcbef';
  const result = isInterleaved(m, n, p);
  expect(result).toBeFalsy();
});

test('test3', () => {
  const m = 'abc';
  const n = 'def';
  const p = 'abdccf';
  const result = isInterleaved(m, n, p);
  expect(result).toBeFalsy();
});

test('test4', () => {
  const m = 'abcdef';
  const n = 'mnop';
  const p = 'mnaobcdepf';
  const result = isInterleaved(m, n, p);
  expect(result).toBeTruthy();
});

test('test5', () => {
  const m = 'aba';
  const n = 'aaabaa';
  const p = 'aabaabaaa';
  const result = isInterleaved(m, n, p);
  expect(result).toBeTruthy();
});

test('test6', () => {
  const m = 'aba';
  const n = 'aaabaa';
  const p = 'aabbaaaaba';
  const result = isInterleaved(m, n, p);
  expect(result).toBeFalsy();
});
