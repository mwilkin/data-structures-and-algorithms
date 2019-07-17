'use strict';

const getEdges = require('../get-edge.js');
const { Graph } = require('../../../../data-structures/graph/graph'); 

describe('getEdges method', () => {
  it('should return [false, 0] for graph with one node', () => {
    const graph = new Graph();

    const a = graph.addNode('a');

    let result = getEdges(graph, [a]);

    expect(result).toEqual([false, 0]);
  });

  it('should return [false, 0] for an invalid graph input', ()=>{
    const graph = new Graph();

    const test = graph.addNode('bad');

    let badResult = getEdges(test, [test]);

    expect(badResult).toEqual([false, 0]);
  });

});

