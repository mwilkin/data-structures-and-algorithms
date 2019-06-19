'use strict';

module.exports = exports;

exports.insertShiftArray = (array, item) => {
  if(typeof array !== 'object'){return null;}
  let middleIndex = Math.ceil(array.length/2);
  
  for( let i = array.length -1; i >= middleIndex ; i-- ){
    array[i + 1] = array[i];
  }
  array[middleIndex] = item;

  return array;
}