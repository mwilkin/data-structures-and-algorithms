'use strict';

const Node = require('./node/index.js');


class BinaryTree {
  constructor(node){
    this.root = node;
  }

  preOrder(){
    let results = [];

    let _walk = node => {
    results.push(node.value);
    if(node.left) _wak(node.left);
    if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;

  }

  inOrder(){
    let results = [];

    let _walk = node => {
      if(node.left) _wak(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder(){
    let results = [];

    let _walk = node => {
      if(node.left) _wak(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree{
  constructor(node) {
    super(node);
  }

  add(node) {
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
        throw new Error('Value already exists in Binary Search Tree');
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
    }
    _walk(this.root);
    return result;
  }
}

module.exports = BinarySearchTree;