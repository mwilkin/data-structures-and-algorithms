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

  it('should return true for more and 2 sets of complementary brackets', () => {

    let squareBracketsPairs = multiBracketValidation('[][]');
    let curlyBracketsNested = multiBracketValidation('{{}}');
    let smoothBrackets = multiBracketValidation('[{()()()}]');
   
    expect(squareBracketsPairs).toBe(true);
    expect(curlyBracketsNested).toBe(true);
    expect(smoothBrackets).toBe(true);
  });

    it('should return false for an unbalence set of brackets', () => {
    let unbalencedOne = multiBracketValidation('{]}');
    let mixed = multiBracketValidation('{[}]');

    expect(unbalencedOne).toBe(false);
    expect(mixed).toBe(false);
  });

    it('should return true for balenced sets of brackets with other characters inserted', () => {
    let insertedCharacters = multiBracketValidation('{{dog}}');

    expect(insertedCharacters).toBe(true);
  }); 

  
});
