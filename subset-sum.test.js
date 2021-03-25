import { subsetSum } from './subset-sum';

test('test1', () => {
  const input = [1, 2, 3, 7];
  const sum = 6;
  const result = subsetSum(input, sum);
  expect(result).toBeTruthy();
});

test('test2', () => {
  const input = [1, 2, 7, 1, 5];
  const sum = 10;
  const result = subsetSum(input, sum);
  expect(result).toBeTruthy();
});

test('test3', () => {
  const input = [1, 3, 4, 8];
  const sum = 6;
  const result = subsetSum(input, sum);
  expect(result).toBeFalsy();
});
