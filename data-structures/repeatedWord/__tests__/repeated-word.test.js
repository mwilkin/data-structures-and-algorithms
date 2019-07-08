'use strict';
const findRepeatedWord = require('../repeated-word.js');

describe('findRepeatedWord function', ()=> {
  it('should throw an error for non-string inputs', () => {
    expect(() => {findRepeatedWord(5)}).toThrow('Not a valid input string');
    expect(() => {findRepeatedWord([])}).toThrow('Not a valid input string');
    expect(() => {findRepeatedWord(true)}).toThrow('Not a valid input string');
    expect(() => {findRepeatedWord(null)}).toThrow('Not a valid input string');
    expect(() => {findRepeatedWord()}).toThrow('Not a valid input string');
  });
});