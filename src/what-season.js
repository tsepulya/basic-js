const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (typeof (date.getMonth) !== 'function') {
    throw new Error('Unable to determine the time of year!');
  } else {
    let month = Date.prototype.getMonth.call(date);
    return (month < 2 || month === 11) ? 'winter' : (month < 5) ? 'spring' : (month < 8) ? 'summer' : 'autumn';
  }
}
