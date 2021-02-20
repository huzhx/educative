import getMinDelIns from './min-delete-insert-to-transform-string';

test('test1', () => {
  const s1 = 'abc';
  const s2 = 'fbc';
  const expected = [1, 1];
  const result = getMinDelIns(s1, s2);
  expect(result).toEqual(expected);
});

test('test2', () => {
  const s1 = 'abdca';
  const s2 = 'cbda';
  const expected = [2, 1];
  const result = getMinDelIns(s1, s2);
  expect(result).toEqual(expected);
});

test('test3', () => {
  const s1 = 'passport';
  const s2 = 'ppsspt';
  const expected = [3, 1];
  const result = getMinDelIns(s1, s2);
  expect(result).toEqual(expected);
});
