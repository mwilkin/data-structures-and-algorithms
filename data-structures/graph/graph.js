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
    this.numberOfNodes = 0;
  }
  addValue(value){
    this.addVertex(new Vertex(value));
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);
    this.numberOfNodes += 1;
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
    const parentPath = new Array();
    stack.push(startVertex);
    visitedVertices.add(startVertex);

    while(stack.length){
      const currentVertex = stack.pop();

      // console.log(currentVertex, goalVertex);
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
        stack.push(neighborVertex);
        parentPath.push(neighborVertex, currentVertex);
      }
    }
  }


  getNodes(){
  //   return this.size() ? [...this._adjacencyList.keys()] : null;

    if(this.numberOfNodes !==0){
      return [...this._adjacencyList.keys()];
    } else {
      return null;
    }
  }

  breadthFirstTraversal(node){
    if(!node){ throw new Error('Input invalid');}

    let visitedArray = [node];
    let traversalQueue = [node];

    while(traversalQueue.length){
      let visitedNode = traversalQueue.shift();

      if(!visitedArray.includes(visitedNode)){
        visitedArray.push(visitedNode);
      }
      const neighbors = this.getNeighbors(visitedNode);

      for(let i = 0; i < neighbors.length; i++){
        if(!visitedArray.includes(neighbors[i])){
          traversalQueue.push(neighbors);
        }
      }
    }
    return visitedArray;
  }


  size(){
    if(this._adjacencyList.size === 0){
      return null;
    }
    return this._adjacencyList.size;
  }

  // prettPrintAdjacencyList(){
  //Iterate over all kes in map
  //For each key, print to scree
  //Print vertex in all edges
  // }

}


// console.log(graph);
// console.log(graph.getNeighbors(eight));

// console.log(graph.pathTo(eight, seven));
module.exports = {Graph, Node, Vertex, Edge};
