const { solveKnapsack, solveKnapsackWithMemo } = require('./knapsack');

test('test1', () => {
  const profits = [1, 6, 10, 16];
  const weights = [1, 2, 3, 5];
  const capacity = 7;
  const result = solveKnapsack(profits, weights, capacity);
  const expected = 22;
  expect(result).toBe(expected);
});

test('test1', () => {
  const profits = [1, 6, 10, 16];
  const weights = [1, 2, 3, 5];
  const capacity = 6;
  const result = solveKnapsack(profits, weights, capacity);
  const expected = 17;
  expect(result).toBe(expected);
});

test('testMemo1', () => {
  const profits = [1, 6, 10, 16];
  const weights = [1, 2, 3, 5];
  const capacity = 7;
  const result = solveKnapsackWithMemo(profits, weights, capacity);
  const expected = 22;
  expect(result).toBe(expected);
});

test('testMemo2', () => {
  const profits = [1, 6, 10, 16];
  const weights = [1, 2, 3, 5];
  const capacity = 6;
  const result = solveKnapsackWithMemo(profits, weights, capacity);
  const expected = 17;
  expect(result).toBe(expected);
});
