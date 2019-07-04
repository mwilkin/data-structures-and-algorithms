'use strict';

const quickSort = require('../quickSort.js');

describe('quickSort', () => {
  let testArray = [97, 1, 3, 2, 48, 96];
  let testArray2 = [-5, 18, 9.5, 0];
  it('should show that values are sorted', () => {

    let actual = quickSort(testArray);
    expect(actual).toEqual([1, 2, 3, 48, 96, 97]);
  });

  it('should show that negative values are sorted', () => {

    let actual = quickSort(testArray2);
    expect(actual).toEqual([-5, 0, 9.5, 18]);
  });

  it('shows empty array sorts to empty array', () => {
    let actual = quickSort([]);
    expect(actual).toEqual([]);
  });

  it('should return a sorted array with no changes', () => {
    const arr = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];
    const array = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];
    expect(quickSort(arr)).toEqual(array);
  });

  it('should return a backwards-sorted array in sorted order', () => {
    const backwards = [12121, 1221, 99, 88, 77, 66, 44, 22, 1, 0.123];
    const forwards = [0.123, 1, 22, 44, 66, 77, 88, 99, 1221, 12121];
    expect(quickSort(backwards)).toEqual(forwards);
  });

  it('should return a single-element array unchanged', () => {
    const one = [1];
    expect(quickSort(one)).toEqual(one);
  });

  it('should still sort an array of only length 2', () => {
    let testShort = [22, 7];
    quickSort(testShort, 0, 1);
    expect(testShort).toEqual([7, 22]);
  });

  it('it should only take in an array', () => {
    let badArray = 'thisverybad';
    expect(() => {
      quickSort(badArray, 0, 1);
    }).toThrow('Input not a valid array');
  });

  it('it should only take an array of all numbers', () => {
    let badStringArray = [1, 3, 4, 'thisisverybad', 6, 2];
    expect(() => {
      quickSort(badStringArray, 0, badStringArray.length - 1);
    }).toThrow('Invalid data in array');
  });

});
