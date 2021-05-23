import isPow2 from './power-of-2';
describe('returns true if the input is power of 2', () => {
  it('returns true with input of 4', () => {
    const input = 4;
    const result = isPow2(input);
    expect(result).toBeTruthy();
  });
  it('returns false with input of 12', () => {
    const input = 12;
    const result = isPow2(input);
    expect(result).toBeFalsy();
  });
});
