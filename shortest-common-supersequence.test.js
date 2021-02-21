import getShortestCommonSupersequenceLength from './shortest-common-supersequence';

test('test1', () => {
  const s1 = 'abcf';
  const s2 = 'bdcf';
  const expected = 5;
  const result = getShortestCommonSupersequenceLength(s1, s2);
  expect(result).toBe(expected);
});

test('test2', () => {
  const s1 = 'dynamic';
  const s2 = 'programming';
  const expected = 15;
  const result = getShortestCommonSupersequenceLength(s1, s2);
  expect(result).toBe(expected);
});
