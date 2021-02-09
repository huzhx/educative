import getMinFee from './min-jumps-with-fee';

test('test1', () => {
  const stairsNum = 6;
  const fee = [1, 2, 5, 2, 1, 2];
  const expected = 3;
  const result = getMinFee(stairsNum, fee);
  expect(result).toBe(expected);
});

test('test2', () => {
  const stairsNum = 4;
  const fee = [2, 3, 4, 5];
  const expected = 5;
  const result = getMinFee(stairsNum, fee);
  expect(result).toBe(expected);
});
