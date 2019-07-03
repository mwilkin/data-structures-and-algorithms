'use strict';

'use strict';

const mergeSort = require('../mergeSort.js');

describe('mergeSort', () => {
  it('should return a sorted array with no changes', () => {
    const arr = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];
    expect(mergeSort(arr)).toEqual(arr);
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
