'use strict';

module.exports = exports = {};

exports.reverseArray = (inputArray) => {
  let reversedArr = [];
  let counter = 0;

  for (let i = inputArray.length -1; i>= 0; i--){
    reversedArr[counter] = inputArray[i];
    counter++;
  }
  return reversedArr;
};
