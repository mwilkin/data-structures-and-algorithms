'use strict';

const Node = require('node/index.js');

class BinarySearchTree {
  constructor(node){
    this.root = node;
  }

  add(node) {
    if(!this.root){
      this.root = node;
      return node;
    }

    let currentNode = this.root;

    if(node.value < currentNode.value){
      currentNode.left = node;
    } else if (node.value > currentNode.value){
      currentNode.right = node;
    }else {
      //node values are equal
    }
  }

}

module.exports = BinarySearchTree;