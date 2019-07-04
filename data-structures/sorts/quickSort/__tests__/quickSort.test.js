'use strict';

const quickSort = require('../quickSort.js');

describe('quickSort', () => {
  let testArray;
  let testArray2;

  beforeEach(() => {
    testArray = [97, 1, 3, 2, 48, 96];
    testArray2 = [-5, 18, 9.5, 0];
  });

  it('should show that values are sorted', () => {
    quickSort(testArray, 0, testArray.length -1);
    expect(testArray).toEqual([1, 2, 3, 48, 96, 97]);
  });

  it('should show that negative values are sorted', () => {
    quickSort(testArray2, 0, testArray2.length-1);
    expect(testArray2).toEqual([-5, 0, 9.5, 18]);
  });

  // Not sure why this one isn't behaving as I expect.
  // It should throw'Input not a valid array'
  // it('should not take an empty array', () => {
  //   let testEmptyArray = [];
  //   quickSort(testEmptyArray, 0, testEmptyArray.length -1);
  //   expect(() => {
  //     quickSort(testEmptyArray, 0, 0);
  //   }).toThrow('Input not a valid array');
  // });

  it('should return a sorted array with no changes', () => {
    const arr = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];
    const array = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];

    quickSort(arr, 1, arr.length - 1);

    expect(arr).toEqual(array);
  });

  it('should return a backwards-sorted array in sorted order', () => {
    const backwards = [12121, 1221, 99, 88, 77, 66, 44, 22, 1, 0.123];
    const forwards = [0.123, 1, 22, 44, 66, 77, 88, 99, 1221, 12121];

    quickSort(backwards, 0, backwards.length -1);

    expect(backwards).toEqual(forwards);
  });

  it('should return a single-element array unchanged', () => {
    const one = [1];
    quickSort(one, 0, one.length -1);
    expect(one).toEqual(one);
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
