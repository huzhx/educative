import { getMaxProfit, topDown, bottomUp } from './rod-cutting';

test('test1', () => {
  const lengths = [1, 2, 3, 4, 5];
  const prices = [2, 6, 7, 10, 13];
  const rodLength = 5;
  const expected = 14;
  const result = getMaxProfit(lengths, prices, rodLength);
  expect(result).toBe(expected);
});

test('test-topDown-1', () => {
  const lengths = [1, 2, 3, 4, 5];
  const prices = [2, 6, 7, 10, 13];
  const rodLength = 5;
  const expected = 14;
  const result = topDown(lengths, prices, rodLength);
  expect(result).toBe(expected);
});

test('test-bottomUp-1', () => {
  const lengths = [1, 2, 3, 4, 5];
  const prices = [2, 6, 7, 10, 13];
  const rodLength = 5;
  const expected = 14;
  const result = bottomUp(lengths, prices, rodLength);
  expect(result).toBe(expected);
});
