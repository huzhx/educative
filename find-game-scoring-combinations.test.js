import { topDown, bottomUp } from './find-game-scoring-combinations';

test('test-topDown-1', () => {
  const score = 3;
  const expected = 3;
  const result = topDown(score);
  expect(result).toBe(expected);
});

test('test-bottomUp-1', () => {
  const score = 3;
  const expected = 3;
  const result = bottomUp(score);
  expect(result).toBe(expected);
});

test('test-topDown-2', () => {
  const score = 5;
  const expected = 10;
  const result = topDown(score);
  expect(result).toBe(expected);
});

test('test-bottomUp-2', () => {
  const score = 5;
  const expected = 10;
  const result = bottomUp(score);
  expect(result).toBe(expected);
});
