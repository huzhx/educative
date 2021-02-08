import getMaxPiecesNumber from './max-ribbon-cut';

test('test1', () => {
  const length = 5;
  const lengths = [2, 3, 5];
  const expected = 2;
  const result = getMaxPiecesNumber(length, lengths);
  expect(result).toBe(expected);
});

test('test2', () => {
  const length = 7;
  const lengths = [2, 3];
  const expected = 3;
  const result = getMaxPiecesNumber(length, lengths);
  expect(result).toBe(expected);
});

test('test3', () => {
  const length = 13;
  const lengths = [3, 5, 7];
  const expected = 3;
  const result = getMaxPiecesNumber(length, lengths);
  expect(result).toBe(expected);
});
