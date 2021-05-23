import countSetBits from './count-set-bits';

describe('returns number of set-bits in a decimal number', () => {
  it('returns 2 with input 5', () => {
    const input = 5;
    const result = countSetBits(input);
    const expected = 2;
    expect(result).toBe(expected);
  });

  it('returns 6 with input 125', () => {
    const input = 125;
    const result = countSetBits(input);
    const expected = 6;
    expect(result).toBe(expected);
  });
});
