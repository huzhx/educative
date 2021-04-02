import { getMinDeletes } from './min-delete-to-make-sequence-sorted';

test('test1', () => {
  const input = [4, 2, 3, 6, 10, 1, 12];
  const expected = 2;
  const result = getMinDeletes(input);
  expect(result).toBe(expected);
});
