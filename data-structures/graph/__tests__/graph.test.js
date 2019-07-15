'use strict';

const { Graph, Node, Vertex, Edge } = require('../graph.js');

describe('Graph data structure', ()=> {
  let graph;
  let five;
  let six;
  let eight;
  beforeEach(() => {
    graph = new Graph();

    eight = new Vertex(8);
    six = new Vertex(6);
    const seven = new Vertex(7);
    five = new Vertex(5);
    const three = new Vertex(3);
    const oh = new Vertex(0);
    const nine = new Vertex(9);

    graph.addVertex(eight);
    graph.addVertex(six);
    graph.addVertex(seven);
    graph.addVertex(five);
    graph.addVertex(three);
    graph.addVertex(oh);
    graph.addVertex(nine);

    graph.addDirectedEdge(eight, six);
    graph.addDirectedEdge(eight, five);
    graph.addDirectedEdge(six, seven);
    graph.addDirectedEdge(seven, five);
    graph.addDirectedEdge(five, three);
    graph.addDirectedEdge(three, oh);
    graph.addDirectedEdge(oh, nine);
    graph.addDirectedEdge(nine, eight);
  });

  it('should create an instance graph', ()=> {
    expect(graph).toBeDefined();
  });

  describe('addNode method', () => {
    it('should successfully add a Node to the graph', () => {

      let X = 42;
      graph.addNode(X);
      expect(graph._adjacencyList.has(X));
    });

  });
  // describe('addDirectedEdge method', () => {
  //   it('should successfully add an edge to the graph', () => {
  //     graph.addDirectedEdge(five, six, 2);
  //     expect(graph[five].toHave)
  //   });

  // });
  // it('should properly retrieve a collection of all nodes from the graph', () => {

  // });
  // it('should retrieve all appropriate neighbors from the graph', () => {
  //   expect(graph.getNeighbors(eight)).toEqual([{'vertex': {'value': 5}, 'weight': 0}, {'vertex': {'value': 6}, 'weight': 0}]);
  // });
  it('should return neighbors with the weight between nodes included', () => {
    expect(graph.getNeighbors(five)).toEqual([{'vertex': {'value': 3}, 'weight': 0}]);
  });
  it('should return the proper size, representing the number of nodes in the graph', () => {
    expect(graph.size()).toEqual(7);
  });
  // it('should properly return a graph with only one node and edge', () => {

  // });
  it('should prperly return null for an empty graph', () => {
    let testGraph = new Graph();
    expect(testGraph.size()).toEqual(null);
  });
});

describe('breadthFirstTraversal method', () => {
  it('should properly throw an error when given an invalid input', () => {
    
  });
});

