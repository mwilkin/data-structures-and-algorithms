'use strict';

const leftJoin = require('../left-join.js');

describe('leftJoin function on hashtables', () => {
  

  it('should not return the keys of antonyms', () =>{
    let test = leftJoin(synonymHash, antonymHash);
    expect(test.flow).toBeFalse();
  });
});
