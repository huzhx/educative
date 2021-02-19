import findLCSLength from './longest-common-substring';

test('test1', () => {
  const s1 = 'abdca';
  const s2 = 'cbda';
  const expected = 2;
  const result = findLCSLength(s1, s2);
  expect(result).toBe(expected);
});

test('test2', () => {
  const s1 = 'passport';
  const s2 = 'ppsspt';
  const expected = 3;
  const result = findLCSLength(s1, s2);
  expect(result).toBe(expected);
});
