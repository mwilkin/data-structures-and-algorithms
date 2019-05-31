'use strict';

const array_shift = require('../array-shift.js');

describe('insertShiftArray function', () => {
  it('insertShiftArray(array, 7) should insert 7 into the middle of the array with an odd number of elements', () => {
    let array = [2, 5, 6, 9, 20];
    let testedArray = array_shift.insertShiftArray(array, 7);
    let expectedArray = [2, 5, 6, 7, 9, 20];
    expect(testedArray).toEqual(expectedArray);

  });

  it('insertShiftArray(array, 7) should insert 7 into the middle of the array with an even number of elements', () => {
    let array = [2, 3, 8, 9];
    let testedArray = array_shift.insertShiftArray(array, 7);
    let expectedArray = [2, 3, 7, 8, 9];
    expect(testedArray).toEqual(expectedArray);

  });

  it('should return null when the first argument is not an array', () =>{
    expect(array_shift.insertShiftArray(true, 5)).toBeNull();
    expect(array_shift.insertShiftArray('one', 5)).toBeNull();
  });
});