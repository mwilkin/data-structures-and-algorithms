'use strict';

/**
 * @function
 * @name insertionSort
 * @param arr {array} An array of numbers
 */

function insertionSort(arr){
  if (!Array.isArray(arr)) throw 'Input is not an array.';
  if(arr.length === 0) throw 'Array is not valid';

  for(let i = 1; i < arr.length; i++){
    let j = i - 1;
    let temp =  arr[i];
    if(typeof arr[i] !== 'number') throw 'Array elements are not valid.';
    while(j >= 0 && temp < arr[j]){
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j+ 1] = temp;
  }
}

module.exports = insertionSort;
