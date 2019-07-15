'use strict';

class Node {
  constructor(data = null){
    this.data = data;
  }
}


class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight || 0;
  }
}

class Graph {
  constructor(){
    this._adjacencyList = new Map();

  }
  addValue(value){
    this.addVertex(new Vertex(value));
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);
  }

  addNode(data){
    const node = new Node(data);
    this._adjacencyList.set(node, []);
    return node;
  }


  addDirectedEdge(startVertex, endVertex, weight = 0){
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      throw new Error('Error: Invalid Vertices');
    }

    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  addBiDirectionalEdge(vertex_a, vertex_b, weight =0){
    this.addDirectedEdge(vertex_a, vertex_b, weight);
    this.addDirectedEdge(vertex_a, vertex_b, weight);
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('Error: Invalid vertex', vertex);
    }

    return [...this._adjacencyList.get(vertex)];
  }

  pathTo(startVertex, goalVertex){
    const stack = [];
    const visitedVertices = new Set();
    const parentPath = new Map();
    stack.push(startVertex);
    visitedVertices.add(startVertex);

    while(stack.length){
      const currentVertex = stack.pop();

      console.log(currentVertex, goalVertex);
      if(currentVertex === goalVertex){
        return parentPath;
      }

      const neighbors = this.getNeighbors(currentVertex);

      for(let edge of neighbors){
        const neighborVertex = edge.vertex;

        if(visitedVertices.has(neighborVertex)){
          continue;
        } else {
          visitedVertices.add(neighborVertex);
        }
        stack.push(neighborVertex, currentVertex);
      }
    }
  }

  // getNodes(){


  // }

  size(){
    return this._adjacencyList.size;
  }

  prettPrintAdjacencyList(){
    //Iterate over all kes in map
    //For each key, print to scree
    //Print vertex in all edges
  }

}

const graph = new Graph();

const eight = new Vertex(8);
const six = new Vertex(6);
const seven = new Vertex(7);
const five = new Vertex(5);
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

// console.log(graph);
// console.log(graph.getNeighbors(eight));

// console.log(graph.pathTo(eight, seven));
module.exports = {Graph, Node, Vertex, Edge};
