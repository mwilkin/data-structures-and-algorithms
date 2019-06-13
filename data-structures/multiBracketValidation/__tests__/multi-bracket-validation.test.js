'use strict';

// test for unbalenced with other characters returns false

const multiBracketValidation = require('../multi-bracket-validation')

describe('multiBracketValidation Module', () => {
  it('show empty string returns false', () => {
    let inputString = '';
    let actual = multiBracketValidation(inputString);
    expect(actual).toEqual(true);
  });

  it('should return false for one bracket', () => {
    let inputString = '{';
    let actual = multiBracketValidation(inputString);
    expect(actual).toEqual(false); 
  });

  it('should return true for 1 set of complementary brackets', () => {

    let squareBrackets = multiBracketValidation('[]');
    let curlyBrackets = multiBracketValidation('{}');
    let smoothBrackets = multiBracketValidation('()');
   
    expect(squareBrackets).toBe(true);
    expect(curlyBrackets).toBe(true);
    expect(smoothBrackets).toBe(true);
  });

  
});
