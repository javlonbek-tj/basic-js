const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const convertedString = n.toString();
  let max = 0;
  for (let i = 0; i < convertedString.length; i++) {
    const resultAfterRemoving =
      convertedString.slice(0, i) + convertedString.slice(i + 1);
    if (resultAfterRemoving > max) {
      max = resultAfterRemoving;
    }
  }
  return +max;
}

module.exports = {
  deleteDigit,
};
