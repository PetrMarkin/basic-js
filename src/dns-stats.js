const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {}
  let arr = domains.map(e => e.split('.').reverse());
  arr[0][0] = '.' + arr[0][0];
  for (let i = 1; i < arr[0].length; i++) {
    arr[0][i] = arr[0][i - 1] + '.' + arr[0][i];
  }
  for (let i = 0; i < arr[0].length; i++) {
    res[`${arr[0][i]}`] = 0;
  }
  for (let key in res) {
    for (let i = 0; i < arr[0].length; i++) {
      if (arr[0][i] === key) {
        res[key] += 1;
      }
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
