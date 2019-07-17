'use strict';

const { Graph } = require ('../../../data-structures/graph/graph.js');

const getEdges = (graph,array) => {
  if(array.length < 2 || !(graph instanceof Graph)){
    return [false, 0];
  }

  let tripTotal = 0;
  for(let i = 0; i < array.length - 1; i++){
    let neighbors = graph.getNeighbors(array[i]);
    let index = neighbors.findIndex(neighbor => neighbor.node === array[i + 1]);
    if(index >= 0){
      tripTotal =+ neighbors[index].weight;
    }else{
      return [false, 0];
    }
  }
  return [true, tripTotal];
};



module.exports = getEdges ;
