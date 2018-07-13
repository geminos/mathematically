/**
 * Calculates the factorial of a number.
 * @function
 * @param {!number} number Number to calculate the factorial.
 * @returns {number} The factorial of a number.
 * @throws {Error} The argument should be a number.
 * @throws {Error} The argument should be a positive integer'.
*/
const factorial = (number) => {
  if (typeof number !== 'number') throw new Error('The argument should be a number');

  if (number < 0) throw new Error('The argument should be a positive integer');

  let result = 1;

  for (let i = number; i > 1; i -= 1) {
    result *= i;
  }

  return result;
};

export default factorial;
