import { getMaxMoney, topDown } from './house-thief';

test('test1', () => {
  const input = [2, 5, 1, 3, 6, 2, 4];
  const expected = 15;
  const result = getMaxMoney(input);
  expect(result).toBe(expected);
});

test('test2', () => {
  const input = [2, 10, 14, 8, 1];
  const expected = 18;
  const result = getMaxMoney(input);
  expect(result).toBe(expected);
});

test('test-topDown-1', () => {
  const input = [2, 5, 1, 3, 6, 2, 4];
  const expected = 15;
  const result = topDown(input);
  expect(result).toBe(expected);
});

test('test-topDown-2', () => {
  const input = [2, 10, 14, 8, 1];
  const expected = 18;
  const result = topDown(input);
  expect(result).toBe(expected);
});
