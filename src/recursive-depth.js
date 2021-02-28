const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    if (Array.isArray(arr) === false) {
      return 0;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) === true) {
          count = Math.max(count, this.calculateDepth(arr[i]) + 1);
        }
      }
      return count;
    }
  }
}