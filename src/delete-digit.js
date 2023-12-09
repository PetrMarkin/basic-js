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
  let arr = n.toString().split('').map(e => +e);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr;
    for (let j = 0; j < arr[i]; j++) {
      arr[i].splice(j,1);
    }
  }
  const res = arr.map(e => e.join('')).sort((a,b) => a - b);
  return res;
}

module.exports = {
  deleteDigit
};
