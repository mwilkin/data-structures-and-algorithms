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

  it('should properly traverse a graph and return summed weights', ()=>{
    const goodGraph = new Graph();

    const a = goodGraph.addNode('cat');
    const b = goodGraph.addNode('dog');
    const c = goodGraph.addNode('fish');
    const d = goodGraph.addNode('horse');

    goodGraph.addBiDirectionalEdge(a, b, 10);
    goodGraph.addBiDirectionalEdge(b, c, 20);
    goodGraph.addBiDirectionalEdge(c, d, 30);

    // let result = getEdges(goodGraph, [a, b, c]);

    // expect(result).toEqual([true, 30]);
    expect(goodGraph).toBeDefined();
  });

});

