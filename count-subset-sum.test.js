const countSubsetSum = require('./count-subset-sum');

test('test1', () => {
  const nums = [1, 1, 2, 3];
  const sum = 4;
  const result = countSubsetSum(nums, sum);
  const expected = 3;
  expect(result).toBe(expected);
});

test('test2', () => {
  const nums = [1, 2, 7, 1, 5];
  const sum = 9;
  const result = countSubsetSum(nums, sum);
  const expected = 3;
  expect(result).toBe(expected);
});
