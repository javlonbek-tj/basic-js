const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let string2 = s2;
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    const indexOfChar = string2.indexOf(char);
    if (indexOfChar !== -1) {
      count++;
      string2 = string2.slice(0, indexOfChar) + string2.slice(indexOfChar + 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
