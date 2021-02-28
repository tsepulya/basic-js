const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== 'string') {
    return false;
  } else {
    sampleActivity = +sampleActivity;
    if (sampleActivity > 15 || sampleActivity <= 0 || isNaN(sampleActivity) === true) {
      return false;
    } else {
      return Math.ceil(Math.log(15 / sampleActivity) * 5730 / 0.693);
    }
  }
}
