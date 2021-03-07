const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 
  if (typeof str != 'string') {
    str = String(str);
  }
  if (options.hasOwnProperty('addition')) {
    if (typeof(options.addition) !== 'string') {
      options.addition = String(options.addition);
    }
  }
  if (!options.addition) {
    options.addition = '';
  }
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (!options.repeatTimes || typeof(options.repeatTimes) !== 'number') {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes || typeof(options.repeatTimes) !== 'number') {
    options.additionRepeatTimes = 1;
  }

  let array = [str];
  let arrayAddition = []; 
  let arrayEnd = [];
  let result;
 
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    arrayAddition.push(options.addition);
  }
  result = arrayAddition.join(options.additionSeparator);
  array.push(result);
  result = array.join('');
  for (let j = 0; j < options.repeatTimes; j++) {
    arrayEnd.push(result);
  }
  result = arrayEnd.join(options.separator);
  return result;
}

//npm run test ./test/extended-repeater.test.js