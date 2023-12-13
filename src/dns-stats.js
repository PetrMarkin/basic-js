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
  for (let j = 0; j < arr.length; j++) {
    arr[j][0] = '.' + arr[j][0];
    for (let i = 1; i < arr[j].length; i++) {
      arr[j][i] = arr[j][i - 1] + '.' + arr[j][i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[j].length; i++) {
      res[`${arr[j][i]}`] = 0;
    }
  }
  for (let key in res) {
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr[j].length; i++) {
        if (arr[j][i] === key) {
          res[key] += 1;
        }
      }
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
