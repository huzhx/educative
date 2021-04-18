import findIndexes from './find-low-high-index-of-a-key-in-a-sorted-array';

test('test1', () => {
  const arr = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];
  const key = 1;
  const result = findIndexes(arr, key);
  const expected = [0, 2];
  expect(result).toEqual(expected);
});

test('test2', () => {
  const arr = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];
  const key = 2;
  const result = findIndexes(arr, key);
  const expected = [3, 7];
  expect(result).toEqual(expected);
});

test('test3', () => {
  const arr = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];
  const key = 5;
  const result = findIndexes(arr, key);
  const expected = [15, 17];
  expect(result).toEqual(expected);
});

test('test4', () => {
  const arr = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];
  const key = 0;
  const result = findIndexes(arr, key);
  const expected = [-1, -1];
  expect(result).toEqual(expected);
});
