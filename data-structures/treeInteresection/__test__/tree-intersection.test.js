'use strict';

const Tree = require('../../tree/tree.js');
const treeIntersection = require('../tree-intersection.js');


describe('treeIntersection function', () => {
  it('should show throw and error if two trees are given as parameters', () => {
    let badTree='';
    let badTree2 = 'badtree';
    expect(() => {
      treeIntersection(badTree, badTree2);
    }).toThrow('Invalid input: treeIntersection() requires two trees');
  });

  // it('shoud not return duplicate values', () => {

  // });

  // it('should return an array of matching values', ()=>{

  // });


});
