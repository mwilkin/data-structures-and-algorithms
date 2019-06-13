'use strict';

// test for a string
// test for one element of a string returns not valid
// test for two matching brackets return true
// test for more than two matching brackets return true
// test for two unbalenced brackets returning false
// test for multiple unbalence brackets return false
// test for balenced brakets with other characters returns true
// test for unbalenced with other characters returns false

const multiBracketValidation = require('../multi-bracket-validation')

describe('multiBracketValidation Module', () => {
  it('show empty string returns false', () => {
    let inputString = '';
    let actual = multiBracketValidation(inputString);
    expect(actual).toEqual(false);
  })

  it('should return false for one bracket', () => {
    let inputString = '{';
    let actual = multiBracketValidation(inputString);
    expect(actual).toEqual(false); 
  });

});
