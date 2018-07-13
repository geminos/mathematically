/**
 * Checks whether the number is perfect.
 * @function
 * @param {!number} number Number to test.
 * @returns {boolean} Test result
 * @throws {Error} The argument should be a number.
*/
const isPerfect = (number) => {
  if (typeof number !== 'number') throw new Error('The argument should be a number');

  if (number <= 0) return false;

  if (number % 2 === 1) return false;

  let result = 1;
  let i = 2;

  while (i * i <= number) {
    if (number % i === 0) {
      result += i;
      result += number / i;
    }

    i += 1;
  }

  // if (i * i === number) result -= i;

  return result === number;
};

export default isPerfect;
