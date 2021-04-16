import search from './search-a-rotated-array';

test('test1', () => {
  const nums = [6, 7, 1, 2, 3, 4, 5];
  const target = 3;
  const result = search(nums, target);
  const expected = 4;
  expect(result).toBe(expected);
});

test('test2', () => {
  const nums = [6, 7, 1, 2, 3, 4, 5];
  const target = 6;
  const result = search(nums, target);
  const expected = 0;
  expect(result).toBe(expected);
});

test('test3', () => {
  const nums = [4, 5, 6, 1, 2, 3];
  const target = 3;
  const result = search(nums, target);
  const expected = 5;
  expect(result).toBe(expected);
});

test('test4', () => {
  const nums = [4, 5, 6, 1, 2, 3];
  const target = 6;
  const result = search(nums, target);
  const expected = 2;
  expect(result).toBe(expected);
});
