import { isInterleaved, topDown, bottomUp } from './strings-interleaving';

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

test('test-topDown-1', () => {
  const m = 'abd';
  const n = 'cef';
  const p = 'abcdef';
  const result = topDown(m, n, p);
  expect(result).toBeTruthy();
});

test('test-topDown-2', () => {
  const m = 'abd';
  const n = 'cef';
  const p = 'adcbef';
  const result = topDown(m, n, p);
  expect(result).toBeFalsy();
});

test('test-topDown-3', () => {
  const m = 'abc';
  const n = 'def';
  const p = 'abdccf';
  const result = topDown(m, n, p);
  expect(result).toBeFalsy();
});

test('test-topDown-4', () => {
  const m = 'abcdef';
  const n = 'mnop';
  const p = 'mnaobcdepf';
  const result = topDown(m, n, p);
  expect(result).toBeTruthy();
});

test('test-topDown-5', () => {
  const m = 'aba';
  const n = 'aaabaa';
  const p = 'aabaabaaa';
  const result = topDown(m, n, p);
  expect(result).toBeTruthy();
});

test('test-topDown-6', () => {
  const m = 'aba';
  const n = 'aaabaa';
  const p = 'aabbaaaaba';
  const result = topDown(m, n, p);
  expect(result).toBeFalsy();
});

test('test-bottomUp-1', () => {
  const m = 'abd';
  const n = 'cef';
  const p = 'abcdef';
  const result = bottomUp(m, n, p);
  expect(result).toBeTruthy();
});

test('test-bottomUp-2', () => {
  const m = 'abd';
  const n = 'cef';
  const p = 'adcbef';
  const result = bottomUp(m, n, p);
  expect(result).toBeFalsy();
});

test('test-bottomUp-3', () => {
  const m = 'abc';
  const n = 'def';
  const p = 'abdccf';
  const result = bottomUp(m, n, p);
  expect(result).toBeFalsy();
});

test('test-bottomUp-4', () => {
  const m = 'abcdef';
  const n = 'mnop';
  const p = 'mnaobcdepf';
  const result = bottomUp(m, n, p);
  expect(result).toBeTruthy();
});

test('test-bottomUp-5', () => {
  const m = 'aba';
  const n = 'aaabaa';
  const p = 'aabaabaaa';
  const result = bottomUp(m, n, p);
  expect(result).toBeTruthy();
});

test('test-bottomUp-6', () => {
  const m = 'aba';
  const n = 'aaabaa';
  const p = 'aabbaaaaba';
  const result = bottomUp(m, n, p);
  expect(result).toBeFalsy();
});
