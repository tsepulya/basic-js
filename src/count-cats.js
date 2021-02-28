const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum = 0;
  if (matrix !== undefined) {
    for (let i = 0; i < matrix.length; i++) {
      sum += (matrix[i].filter(elem => elem ==='^^')).length;
    }
  }
  return sum;
} 
