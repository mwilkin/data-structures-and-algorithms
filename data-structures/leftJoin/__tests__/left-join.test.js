'use strict';

const leftJoin = require('../left-join.js');

describe('leftJoin function on hashtables', () => {
  let synonymHash = {};
  synonymHash.fond = 'enamored';
  synonymHash.wrath = 'anger';
  synonymHash.diligent = 'employed';
  synonymHash.outfit = 'garb';
  synonymHash.guide = 'usher';

  let antonymHash = {};
  antonymHash.fond = 'averse';
  antonymHash.wrath = 'delight';
  antonymHash.diligent = 'idle';
  antonymHash.guide = 'follow';
  antonymHash.flow = 'jam';

  it('should not return the keys of antonyms', () =>{
    let test = leftJoin(synonymHash, antonymHash);
    expect(test.flow).toBeFalsy();
  });

  it('should return an error if only one hashtable is passed as a parameter', ()=> {
    expect(() =>{
      leftJoin(antonymHash);
    }).toThrow('Not valid input. Two hashtables required');
  });

  // it('should properly append the antonym value to the key and synonym values', ()=> {

  // });

});
