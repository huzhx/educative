import getMinJumps from './min-jumps';

test('test1', () => {
  const input = [2, 1, 1, 1, 4];
  const expected = 3;
  const result = getMinJumps(input);
  expect(result).toBe(expected);
});

test('test2', () => {
  const input = [1, 1, 3, 6, 9, 3, 0, 1, 3];
  const expected = 4;
  const result = getMinJumps(input);
  expect(result).toBe(expected);
});
