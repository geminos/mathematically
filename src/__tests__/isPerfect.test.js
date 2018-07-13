import mathematically from 'index';

describe('isPerfect', () => {
  test('it should return an error if the argument is invalid', () => {
    expect(() => mathematically.isPerfect('number')).toThrowError('The argument should be a number');
    expect(() => mathematically.isPerfect()).toThrowError('The argument should be a number');
  });

  test('it should return true if the argument is a perfect number', () => {
    expect(mathematically.isPerfect(6)).toBe(true);
    expect(mathematically.isPerfect(28)).toBe(true);
    expect(mathematically.isPerfect(496)).toBe(true);
    expect(mathematically.isPerfect(8128)).toBe(true);
  });

  test('it should return false if the argument is not a perfect number', () => {
    expect(mathematically.isPerfect(0)).toBe(false);
    expect(mathematically.isPerfect(5)).toBe(false);
    expect(mathematically.isPerfect(12)).toBe(false);
    expect(mathematically.isPerfect(498)).toBe(false);
  });
});
