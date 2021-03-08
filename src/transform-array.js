const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {   // проходим ошибку, если параметр - не массив
    throw Error();
  } else { 
    let array2 = [];
    for (let i = 0; i < arr.length; i++) { // проходим по всей длине массива
      if (arr[i] === '--double-prev') { // если элемент double-prev => 
        if (i > 0) { // => если предыдущий не undefined  
          array2.push(array2[array2.length - 1]);
        }  // => добавляем предыдущий элемент из нового массива!
      } else if (arr[i] === '--double-next') { // если элемент double-next и следующий не undefined => добавляем следующий
        if (i < arr.length - 1) {
          array2.push(arr[i + 1]);
        }
      } else if (arr[i] === '--discard-next') { // если элемент discard-next =>
        if (i < arr.length) { // => если следующий не undefined =>
          array2.push(undefined)
          i++; // перескакиваем через следующий элемент
        }
      } else if (arr[i] === '--discard-prev') { // если элемент discard-prev и предыд.элемент не undefined => удалить последний элемент в массиве
        if (i > 0) {
          array2.pop();
        }
      } else { // если элемент - прочее => добавляем в новый массив
        array2.push(arr[i]);
      }
  }
    let arrayEnd = array2.filter(elem => elem !== undefined)
    return arrayEnd;
  }
}


// npm run test ./test/transform-array.test.js