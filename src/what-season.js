const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if ([0, 1, 2].includes(date.getMonth())) {
    return 'winter';
  }
  if ([3, 4, 5].includes(date.getMonth())) {
    return 'spring';
  }
  if ([6, 7, 8].includes(date.getMonth())) {
    return 'summer';
  }
  if ([9, 10, 11].includes(date.getMonth())) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
