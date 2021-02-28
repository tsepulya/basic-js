const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) !== true) {
    return null;
  } else {
    let array2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof (arr[i]) === 'number') {
        array2.push(arr[i]);
      } else if (arr[i] === '--double-prev') {
        if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') {
          array2.push(arr[i - 1]);
        }
      } else if (arr[i] === '--double-next') {
        if (arr[i + 1] !== undefined) {
          array2.push(arr[i + 1]);
        }
      } else if (arr[i] === '--discard-next') {
        if (arr[i + 1] !== undefined && arr[i + 2] !== '--discard-prev') {
          i++;
        }
      } else if (arr[i] === '--discard-prev') {
        if (arr[i - 1] !== undefined) {
          array2.pop();

        }
      }

    }
    return array2;
  }
}