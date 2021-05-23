import checkEven from './check-even';

describe('returns true if the input is even', () => {
  it('returns false with input 5', () => {
    const input = 5;
    const result = checkEven(input);
    expect(result).toBeFalsy();
  });
  it('returns true with input 6', () => {
    const input = 6;
    const result = checkEven(input);
    expect(result).toBeTruthy();
  });
});
