const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.additionRepeatTimes === 1) {
    options.additionSeparator = '';
  }
  let addition = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  addition = addition.slice(0, addition.length - options.additionSeparator.length);
  if (options.repeatTimes === 1) {
    options.separator = '';
  }
  str = (str + addition + options.separator).repeat(options.repeatTimes);
  return str.slice(0, str.length - options.separator.length)
}

module.exports = {
  repeater
};
