const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = email.split('@');
  for (let i = 1; i < res.length; i++) {
    if (res[i][0] === '.') {
      res[i] = res[i].slice(1);
    }
  }
  return res[res.length - 1];
}

module.exports = {
  getEmailDomain
};
