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
  let arr = n.toString().split('').map(e => e = n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString().split('').map(e => +e);
    arr[i][i] = '';
    arr[i] = arr[i].filter(e => e !== '').join('')
  }
  arr.sort((a, b) => b - a);
  return +arr[0];
}

module.exports = {
  deleteDigit
};
