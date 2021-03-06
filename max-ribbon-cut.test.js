import { getMaxPiecesNumber, topDown, bottomUp } from './max-ribbon-cut';

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

test('test-topDown-1', () => {
  const length = 5;
  const lengths = [2, 3, 5];
  const expected = 2;
  const result = topDown(length, lengths);
  expect(result).toBe(expected);
});

test('test-topDown-2', () => {
  const length = 7;
  const lengths = [2, 3];
  const expected = 3;
  const result = topDown(length, lengths);
  expect(result).toBe(expected);
});

test('test-topDown-3', () => {
  const length = 13;
  const lengths = [3, 5, 7];
  const expected = 3;
  const result = topDown(length, lengths);
  expect(result).toBe(expected);
});

test('test-bottomUp-1', () => {
  const length = 5;
  const lengths = [2, 3, 5];
  const expected = 2;
  const result = bottomUp(length, lengths);
  expect(result).toBe(expected);
});

test('test-bottomUp-2', () => {
  const length = 7;
  const lengths = [2, 3];
  const expected = 3;
  const result = bottomUp(length, lengths);
  expect(result).toBe(expected);
});

test('test-bottomUp-3', () => {
  const length = 13;
  const lengths = [3, 5, 7];
  const expected = 3;
  const result = bottomUp(length, lengths);
  expect(result).toBe(expected);
});
