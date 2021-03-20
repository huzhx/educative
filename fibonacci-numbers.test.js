import { getNthFibNumber, getNthFibNumberBottomUp } from './fibonacci-numbers';

test('test1', () => {
  const n = 5;
  const expected = 5;
  const result = getNthFibNumber(n);
  expect(result).toBe(expected);
});

test('test2', () => {
  const n = 6;
  const expected = 8;
  const result = getNthFibNumber(n);
  expect(result).toBe(expected);
});

test('test3', () => {
  const n = 7;
  const expected = 13;
  const result = getNthFibNumber(n);
  expect(result).toBe(expected);
});

test('test4', () => {
  const n = 5;
  const expected = 5;
  const result = getNthFibNumberBottomUp(n);
  expect(result).toBe(expected);
});

test('test5', () => {
  const n = 6;
  const expected = 8;
  const result = getNthFibNumberBottomUp(n);
  expect(result).toBe(expected);
});

test('test6', () => {
  const n = 7;
  const expected = 13;
  const result = getNthFibNumberBottomUp(n);
  expect(result).toBe(expected);
});
