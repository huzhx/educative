import { getNumOfCombinations, topDown, bottomUp } from './coin-change';

test('test1', () => {
  const denominations = [1, 2, 3];
  const total = 5;
  const expected = 5;
  const result = getNumOfCombinations(denominations, total);
  expect(result).toBe(expected);
});

test('test-topDown-1', () => {
  const denominations = [1, 2, 3];
  const total = 5;
  const expected = 5;
  const result = topDown(denominations, total);
  expect(result).toBe(expected);
});

test('test-bottomUp-1', () => {
  const denominations = [1, 2, 3];
  const total = 5;
  const expected = 5;
  const result = bottomUp(denominations, total);
  expect(result).toBe(expected);
});

test('test2', () => {
  const denominations = [1, 2, 5];
  const total = 7;
  const expected = 6;
  const result = getNumOfCombinations(denominations, total);
  expect(result).toBe(expected);
});

test('test-topDown-2', () => {
  const denominations = [1, 2, 5];
  const total = 7;
  const expected = 6;
  const result = topDown(denominations, total);
  expect(result).toBe(expected);
});

test('test-bottomUp-2', () => {
  const denominations = [1, 2, 5];
  const total = 7;
  const expected = 6;
  const result = bottomUp(denominations, total);
  expect(result).toBe(expected);
});
