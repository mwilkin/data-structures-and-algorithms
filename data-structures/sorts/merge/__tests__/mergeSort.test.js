'use strict';

const mergeSort = require('../mergeSort.js');

describe('mergeSort', () => {
  it('should return a sorted array with no changes', () => {
    const arr = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];
    expect(mergeSort(arr)).toEqual(arr);
  });

  it('Should sort an array with an even amount of values', () => {
    let arr = [9, 5, 6, 2, 5, 1];
    let sorted = mergeSort(arr);
    expect(sorted).toEqual([1, 2, 5, 5, 6, 9]);
  });

  it('Should sort an array with an odd amount of values', () => {
    let arr = [9, 70, 5, 3, 1, 21, 12];
    let sorted = mergeSort(arr);
    expect(sorted).toEqual([1, 3, 5, 9, 12, 21, 70]);
  });

  it('should return a backwards-sorted array in sorted order', () => {
    const backwards = [12121, 1221, 99, 88, 77, 66, 44, 22, 1, 0.123];
    expect(mergeSort(backwards)).toEqual(backwards.reverse());
  });

  it('should return an empty array argument unchanged', () => {
    const empty = [];
    expect(mergeSort(empty)).toEqual(empty);
  });

  it('should return a single-element array unchanged', () => {
    const one = [1];
    expect(mergeSort(one)).toEqual(one);
  });

});
