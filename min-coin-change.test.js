import getMinCoinsNumber from './min-coin-change';

test('test1', () => {
  const denominations = [1, 2, 3];
  const total = 5;
  const expected = 2;
  const result = getMinCoinsNumber(denominations, total);
  expect(result).toBe(expected);
});

test('test2', () => {
  const denominations = [1, 2, 3];
  const total = 11;
  const expected = 4;
  const result = getMinCoinsNumber(denominations, total);
  expect(result).toBe(expected);
});
