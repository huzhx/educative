import countPatternTimes from './subsequence-pattern-matching.js';

test('test1', () => {
  const input = 'baxmx';
  const pattern = 'ax';
  const expected = 2;
  const result = countPatternTimes(input, pattern);
  expect(result).toBe(expected);
});

test('test2', () => {
  const input = 'tomorrow';
  const pattern = 'tor';
  const expected = 4;
  const result = countPatternTimes(input, pattern);
  expect(result).toBe(expected);
});
