'use strict';

const Node = require('./node/index.js');

// const Queue = require('../stacksAndQueues/stacks-and-queues.js').Queue;

class BinaryTree {
  constructor(node){
    this.root = node;
  }

  preOrder(){
    let results = [];

    let _walk = node => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;

  }

  inOrder(){
    let results = [];

    let _walk = node => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder(){
    let results = [];

    let _walk = node => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  breadthFirst(tree){
    if(tree === undefined || tree === null) return 'error';
    let queue = [tree.root];
    let currentNode = queue.shift();

    while(currentNode){
      console.log(currentNode.value);
      queue.push(currentNode.left);
      queue.push(currentNode.right);
      currentNode = queue.shift();
    }
  }

  findMaximumValue(tree){
    if(tree === undefined || tree === null) return 'error';
    let maxValue = tree.root.value;

    let _walk = node => {
      if(node.left) _walk(node.left);
      if(node.value > maxValue){
        maxValue = node.value;
      }
      if(node.right) _walk(node.right);
    };
    _walk(tree.root);
    return maxValue;
  }

}

class BinarySearchTree extends BinaryTree{
  constructor(node) {
    super(node);
  }

  add(value) {
    if(!value) return 'No value given';
    let node = new Node(value);
    if(!this.root){
      this.root = node;
      return node;
    }

    let currentNode = this.root;

    while(currentNode){
      if(node.value < currentNode.value){
        //Go left
        if(!currentNode.left){
          currentNode.left = node;
          break;
        }else{
          currentNode = currentNode.left;
        }
      } else if (node.value > currentNode.value){
        //Go right
        if(!currentNode.right){
          currentNode.right = node;
          break;
        }else{
          currentNode = currentNode.right;
        }
      }else {
        //duplicate value found
        return 'Value already exists';
        // throw new Error('Value already exists in Binary Search Tree');
      }
    }
  }

  contains(value){
    if(!value) return 'No value given';

    let result = false;

    let _walk = node => {
      if(node.value === value) {
        result = true;
        return;
      } else if(node.left !== undefined && value < node.value){
        _walk(node.left);
      } else if(node.righ !== undefined && value > node.value){
        _walk(node.right);
      }
    };
    _walk(this.root);
    return result;
  }
}

module.exports = BinarySearchTree;
