import findSmallestCommonNumber from './find-the-smallest-common-number';

test('test1', () => {
  const mat = [
    [1, 2, 3, 4, 5],
    [2, 4, 5, 8, 10],
    [3, 5, 7, 9, 11],
    [1, 3, 5, 7, 9],
  ];
  const result = findSmallestCommonNumber(mat);
  const expected = 5;
  expect(result).toBe(expected);
});

test('test2', () => {
  const mat = [
    [1, 2, 3],
    [2, 3, 4],
    [2, 3, 5],
  ];
  const result = findSmallestCommonNumber(mat);
  const expected = 2;
  expect(result).toBe(expected);
});

test('test3', () => {
  const mat = [
    [6, 7, 10, 25, 30, 63, 64],
    [0, 4, 5, 6, 7, 8, 50],
    [1, 6, 10, 14],
  ];
  const result = findSmallestCommonNumber(mat);
  const expected = 6;
  expect(result).toBe(expected);
});
