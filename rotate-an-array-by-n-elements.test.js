import rotate from './rotate-an-array-by-n-elements';

test('test1', () => {
  const arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
  const n = -1;
  const result = rotate(arr, n);
  const expected = [10, 20, 0, 59, 86, 32, 11, 9, 40, 1];
  expect(result).toEqual(expected);
});

test('test2', () => {
  const arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
  const n = 2;
  const result = rotate(arr, n);
  const expected = [9, 40, 1, 10, 20, 0, 59, 86, 32, 11];
  expect(result).toEqual(expected);
});
