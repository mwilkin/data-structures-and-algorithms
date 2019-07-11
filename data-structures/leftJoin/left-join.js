'use strict';
const leftJoin = ( leftHash, rightHash) => {
  if(!leftHash || !rightHash)throw new Error('Not valid input. Two hashtables required');
  let results = leftHash;
  for (const key in rightHash){
    if (leftHash[key]){
      results[key] = [leftHash[key], rightHash[key]];
    }
  }
  return results;
};

module.exports = leftJoin;
