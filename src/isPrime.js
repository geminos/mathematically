/**
 * Checks whether the number is prime.
 * @function
 * @param {!number} number Number to test.
 * @returns {boolean} Test result
 * @throws {Error} The argument should be a number.
*/
const isPrime = (number) => {
  if (typeof number !== 'number') throw new Error('The argument should be a number');

  if (number <= 1) return false;

  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  let i = 5;

  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;

    i += 6;
  }

  return true;
};

export default isPrime;
