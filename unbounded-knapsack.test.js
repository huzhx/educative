import getMaxProfitCombination from './unbounded-knapsack';

test('test1', () => {
  const items = ['Apple', 'Orange', 'Melon'];
  const weights = [1, 2, 3];
  const profits = [15, 20, 50];
  const capacity = 5;
  const expected = ['Apple', 'Apple', 'Melon'];
  const result = getMaxProfitCombination(items, weights, profits, capacity);
  expect(result).toEqual(expected);
});

test('test2', () => {
  const items = ['Apple', 'Orange', 'Melon', 'Banana'];
  const weights = [1, 3, 4, 5];
  const profits = [15, 50, 60, 90];
  const capacity = 8;
  const expected = ['Orange', 'Banana'];
  const result = getMaxProfitCombination(items, weights, profits, capacity);
  expect(result).toEqual(expected);
});
