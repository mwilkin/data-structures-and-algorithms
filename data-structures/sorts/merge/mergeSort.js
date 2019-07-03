'use strict';

function mergeSort (array) {
  //  one element or empty arrays don't need sorting. 
  if (array.length <= 1) {
    return array;
  }
  //figure out the middle of the array and divide it in half
  const middle = Math.floor(array.length / 2);

  //dividing the array into left and right
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

// Merge the two arrays
function merge (left, right) {
  let resultArray = []; 
  leftIndex = 0;
  rightIndex = 0;

  //concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; 
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; 
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}
