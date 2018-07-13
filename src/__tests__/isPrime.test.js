import mathematically from 'index';

describe('isPrime', () => {
  test('it should return an error if the argument is not a number', () => {
    expect(() => mathematically.isPrime('number')).toThrowError('The argument should be a number');
    expect(() => mathematically.isPrime()).toThrowError('The argument should be a number');
  });

  test('it should return true if the argument is a prime number', () => {
    expect(mathematically.isPrime(2)).toBe(true);
    expect(mathematically.isPrime(37)).toBe(true);
  });

  test('it should return false if the argument is not a prime number', () => {
    expect(mathematically.isPrime(1)).toBe(false);
    expect(mathematically.isPrime(6)).toBe(false);
    expect(mathematically.isPrime(25)).toBe(false);
  });
});
