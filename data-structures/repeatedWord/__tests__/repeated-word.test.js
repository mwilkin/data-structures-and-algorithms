'use strict';
const findRepeatedWord = require('../repeated-word.js');

describe('findRepeatedWord function', ()=> {
  it('should throw an error for non-string inputs', () => {
    expect(() => {
      findRepeatedWord(5);
    }).toThrow('Not a valid input string');
    expect(() => {
      findRepeatedWord([]);
    }).toThrow('Not a valid input string');
    expect(() => {
      findRepeatedWord(true);
    }).toThrow('Not a valid input string');
    expect(() => {
      findRepeatedWord(null);
    }).toThrow('Not a valid input string');
    expect(() => {
      findRepeatedWord();
    }).toThrow('Not a valid input string');
  });

  it('should correctly return the only repeated word in a string', () => {
    let string = 'this is my random testing sentence to see which of my words get caught for repeating';

    let found = findRepeatedWord(string);

    expect(found).toEqual("my");
  });

  it('should correctly return the first repeated word in a string', () => {
    let string1 = 'this is my favorite word. A word that my dog can speak.';
    let found = findRepeatedWord(string1);

    expect(found).toEqual("my");
  });

  it('should correctly return no found repeated words if none exist in the input string', ()=> {
    let noRepeats = 'this is my cool non word repeating sentence.';
    let result = findRepeatedWord(noRepeats);

    expect(result).toEqual('There are no repeated words.');
  });

  // it('should correctly ignore punctuation and still find matching words', () => {
  //   let punctuation = 'Happy days. Days of summer.'

  //   let result = findRepeatedWord(punctuation);

  //   expect(result).toEqual("days");
  // });

});
