import findMax from './find-maximum-in-sliding-window';

test('test1', () => {
  const nums = [-4, 2, -5, 3, 6];
  const windowSize = 3;
  const result = findMax(nums, windowSize);
  const expected = [2, 3, 6];
  expect(result).toEqual(expected);
});

test('test2', () => {
  const nums = [-4, 2, -5, -13, -6];
  const windowSize = 3;
  const result = findMax(nums, windowSize);
  const expected = [2, 2, -5];
  expect(result).toEqual(expected);
});
