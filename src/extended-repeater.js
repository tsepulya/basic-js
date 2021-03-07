const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  (typeof(str) !== 'string') ? str = str.toString() : str = str;
  let array = [str];
  let arrayAddition = [];
  let resultAddition;
  let result;
  let arrayEnd = [];

  if ("addition" in options === true) { // если есть дополнения
    (typeof(options.addition) !== 'string') ? options.addition = 'DEFAULTSTRING' : options.addition;
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      arrayAddition.push(options.addition);
    }
    if ("additionSeparator" in options === true) { // если есть дополнения и разделитель между дополнениями
      resultAddition = arrayAddition.join(options.additionSeparator);
      array.push(resultAddition);
      result = array.join('');
    } else { // если есть дополнения, но нет разделителя между дополнениями
      resultAddition = arrayAddition.join('');
      array.push(resultAddition);
      result = array.join('');
    }
    if ("repeatTimes" in options === true) {
      for (let i = 0; i < options.repeatTimes; i++) {
        arrayEnd.push(result);
      }
      if ("separator" in options === true) {
        result = arrayEnd.join(options.separator);
      } else {
        result = arrayEnd.join('');
      }
    }
    return result;
  } else { // если нет дополнений
    if ("repeatTimes" in options === true) {
      for (let i = 0; i < options.repeatTimes; i++) {
        array.push(str);
      }
      if ("separator" in options === true) { // если есть сепаратор
        result = array.join(options.separator);
      } else { // если нет сепаратора
        result = array.join('');
      }
    }
    return result;
  }
}