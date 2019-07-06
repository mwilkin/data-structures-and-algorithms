'use strict;';

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let midpoint = Math.floor((start + end)/ 2);
  if(typeof array !== 'object' || typeof target !== 'number' ){return null;}
  while( array[midpoint] !== target && start < end){
    if(target < array[midpoint]){
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }
    midpoint = Math.floor((start + end)/ 2);
  }
  return (array[midpoint] !== target ? -1 : midpoint);
}

module.exports = binarySearch;
