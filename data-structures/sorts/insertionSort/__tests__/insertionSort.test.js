'use strict';

const insertionSort = require('../insertionSort.js');

describe('Insertion sort Algorithm tests', () => {
  let testArr;

  beforeEach( () => {
    testArr = [1, 12, 22, 15, 7, 3, 6, 5, 2];
  });

  it('should only accept an array as a parameter', () => {
    let badArray = 'this is a bad thing';
    expect( () => {
      insertionSort(badArray);
    }).toThrow('Input is not an array.');
  });

  it('should throw an error if the array is not composed completely of numbers', () => {
    let badArray = [2, 1, 4, 5, 'skip', 10];
    expect( () => {
      insertionSort(badArray);
    }).toThrow('Array elements are not valid.');
  });

  it('should sort the array', () => {
    insertionSort(testArr);
    expect(testArr).toEqual([1, 2, 3, 5, 6, 7, 12, 15, 22]);
  });

  it('should sort an array of 2 elements', () => {
    let smallArray = [5, 1];
    insertionSort(smallArray);
    expect(smallArray).toEqual([1, 5]);
  });

  it('should throw an error if the input array is empty', () => {
    let emptyArray = [];
    insertionSort(emptyArray);
    expect( () => {
      git coinsertionSort(emptyArray);
    }).toThrow('Array elements are not valid.');
  });
});
