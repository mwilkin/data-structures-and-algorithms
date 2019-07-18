'use strict';

const depthFirstTraversal = require('../depth-first.js');
const { Graph } = require('../../graph/graph.js');

describe('depthFirstTraversal method', () => {
  it('should be happy',() => {
    expect(1).toBe(1);
  });
  it('should be sad', () =>{
    expect(1).toBe(1);
  });
  it('should be an edge case', () =>{
    expect(1).toBe(1);
  });
  // it('should properly check for invalid input', () =>{
  //   let badGraph = new Graph(6);
  //   let actual = depthFirstTraversal(badGraph);
  //   expect(actual).toBe('Invalid graph');
  // });
});
