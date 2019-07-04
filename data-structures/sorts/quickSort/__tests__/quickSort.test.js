'use strict';

const quickSort = require('../quickSort.js');

describe('quickSort', () => {
  let testArray = [97, 1, 3, 2, 48, 96];
  let testArray2 = [-5, 18, 9.5, 0]
  it('should show that values are sorted', () => {

    let actual = quickSort(testArray)
    expect(actual).toEqual([1, 2, 3, 48, 96, 97])
  });

  it('should show that negative values are sorted', () => {

    let actual = quickSort(testArray2)
    expect(actual).toEqual([-5, 0, 9.5, 18])
  });

  it('shows empty array sorts to empty array', () => {
  
    let actual = quickSort([]);
    expect(actual).toEqual([]);
  });

  it('should return a sorted array with no changes', () => {
    // I do not know why the tests failed without the different arrays
    const arr = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];
    const array = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];
    expect(quickSort(arr)).toEqual(array);

  

});
