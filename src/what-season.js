const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (typeof (date.getMonth) !== 'function') {
    return 'THROWN'
  } else {
    let month = date.getMonth();
    return (month < 3 || month === 12) ? 'winter' : (month < 6) ? 'spring' : (month < 9) ? 'summer' : 'autumn';
  }
}
