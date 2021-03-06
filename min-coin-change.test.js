import { getMinCoinsNumber, topDown, bottomUp, greedy } from './min-coin-change';

test('test1', () => {
  const denominations = [1, 2, 3];
  const total = 5;
  const expected = 2;
  const result = getMinCoinsNumber(denominations, total);
  expect(result).toBe(expected);
});

test('test-topDown-1', () => {
  const denominations = [1, 2, 3];
  const total = 5;
  const expected = 2;
  const result = topDown(denominations, total);
  expect(result).toBe(expected);
});

test('test-bottomUp-1', () => {
  const denominations = [1, 2, 3];
  const total = 5;
  const expected = 2;
  const result = bottomUp(denominations, total);
  expect(result).toBe(expected);
});

test('test-greedy-1', () => {
  const denominations = [1, 2, 3];
  const total = 5;
  const expected = 2;
  const result = greedy(denominations, total);
  expect(result).toBe(expected);
});

test('test2', () => {
  const denominations = [1, 2, 3];
  const total = 11;
  const expected = 4;
  const result = getMinCoinsNumber(denominations, total);
  expect(result).toBe(expected);
});

test('test-topDown-2', () => {
  const denominations = [1, 2, 3];
  const total = 11;
  const expected = 4;
  const result = topDown(denominations, total);
  expect(result).toBe(expected);
});

test('test-bottomUp-2', () => {
  const denominations = [1, 2, 3];
  const total = 11;
  const expected = 4;
  const result = bottomUp(denominations, total);
  expect(result).toBe(expected);
});

test('test-greedy-2', () => {
  const denominations = [1, 2, 3];
  const total = 11;
  const expected = 4;
  const result = greedy(denominations, total);
  expect(result).toBe(expected);
});

test('test3', () => {
  const denominations = [2];
  const total = 3;
  const expected = -1;
  const result = getMinCoinsNumber(denominations, total);
  expect(result).toBe(expected);
});

test('test-topDown-3', () => {
  const denominations = [2];
  const total = 3;
  const expected = -1;
  const result = topDown(denominations, total);
  expect(result).toBe(expected);
});

test('test-bottomUp-3', () => {
  const denominations = [2];
  const total = 3;
  const expected = -1;
  const result = bottomUp(denominations, total);
  expect(result).toBe(expected);
});

test('test-greedy-3', () => {
  const denominations = [2];
  const total = 3;
  const expected = -1;
  const result = greedy(denominations, total);
  expect(result).toBe(expected);
});
