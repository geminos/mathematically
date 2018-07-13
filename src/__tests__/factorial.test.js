import mathematically from 'index';

describe('factorial', () => {
  test('it should return an error if the argument is invalid', () => {
    expect(() => mathematically.factorial('number')).toThrowError('The argument should be a number');
    expect(() => mathematically.factorial(-1)).toThrowError('The argument should be a positive integer');
  });

  test('it should return the factorial of the argument number', () => {
    expect(mathematically.factorial(0)).toBe(1);
    expect(mathematically.factorial(2)).toBe(2);
    expect(mathematically.factorial(6)).toBe(720);
    expect(mathematically.factorial(10)).toBe(3628800);
  });
});
