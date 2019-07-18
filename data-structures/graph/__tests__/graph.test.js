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

  // afterEach( () => {
  //   graph._adjacencyList.clear();
  // });

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
  describe('addDirectedEdge method', () => {
    it('should successfully add an edge to the graph', () => {
      let catVertex = new Vertex(50);
      let dogVertex = new Vertex(22);
      graph.addVertex(catVertex);
      graph.addVertex(dogVertex);
      graph.addDirectedEdge(catVertex, dogVertex, 2);
      let actual = [new Edge(new Vertex(22), 2)];
      expect(graph._adjacencyList.get(catVertex)).toEqual(actual);
    });

  });
  it('should properly retrieve a collection of all nodes from the graph', () => {

    expect(graph.getNodes()).toEqual([{'value': 8}, {'value': 6}, {'value': 7}, {'value': 5}, {'value': 3}, {'value': 0}, {'value': 9}]);
  });

  it('should return neighbors with the weight between nodes included', () => {
    expect(graph.getNeighbors(five)).toEqual([{'vertex': {'value': 3}, 'weight': 0}]);
  });

  it('should return the proper size, representing the number of nodes in the graph', () => {
    expect(graph.size()).toEqual(7);
  });

  it('should properly return a graph with only one node and edge', () => {
    let minnieGraph = new Graph();
    let actual = new Vertex(50);
    minnieGraph.addVertex(actual);
    minnieGraph.addBiDirectionalEdge(actual, actual);
    expect(minnieGraph.size()).toEqual(1);

  });
  it('should prperly return null for an empty graph', () => {
    let testGraph = new Graph();
    expect(testGraph.size()).toEqual(null);
  });

  it('can properly find a path between verticies', () => {
    expect(graph.pathTo(six, five)).toEqual([{'value': 7}, {'value': 6}, {'value': 5}, {'value': 7}]);
  });
});

describe('breadthFirstTraversal method', () => {

  it('should properly throw an error when given an invalid input', () => {
    let badNode = '';
    let badGraph = new Graph(badNode);
    expect( () => {
      badGraph.breadthFirstTraversal(badNode);
    }).toThrow('Input invalid');
  });

  it('should properly return null if the node and/or the node value is undefined', ()=> {
    let node;
    let undefinedGraph = new Graph(node);
    expect(() => {
      undefinedGraph.breadthFirstTraversal(node).toThrow('Input Invalid');
    });
  });

  it('should return an array', ()=> {
    let graph = new Graph();
    graph.addVertex('one', []);

    let actual = graph.breadthFirstTraversal('one');

    expect(actual).toBeInstanceOf(Array);

  });
  // it('should return an array with visited nodes', ()=> {
  //   let cityGraph = new Graph();
  //   let bendVertex = new Vertex('bend');
  //   let sunriverVertex = new Vertex('sunriver');
  //   let fossilVertex = new Vertex('fossil');
  //   cityGraph.addNode(bendVertex);
  //   cityGraph.addNode(sunriverVertex);
  //   cityGraph.addNode(fossilVertex);
  //   cityGraph.addDirectedEdge(bendVertex, sunriverVertex);
  //   cityGraph.addDirectedEdge(bendVertex, fossilVertex);

  //   let actual = cityGraph.breadthFirstTraversal(bendVertex);

  //   expect(actual).toEqual(['bend', 'sunriver', 'fossil']);
  // });

  // it('should detect only one vertex if only one given', ()=> {
  //   let oneGraph = new Graph();
  //   let oneVertex = new Vertex('One');

  //   let result = oneGraph.breadthFirstTraversal(oneVertex);
  //   expect(result).toEqual(['One']);
  // });

});
