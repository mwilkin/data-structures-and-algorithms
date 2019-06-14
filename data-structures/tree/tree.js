'use strict';

const Node = require('node/index.js');

class BinarySearchTree {
  constructor(node){
    this.root = node;
  }

  preOrder(){

  }

  inOrder(){
    let results = [];

    let _walk = node => {
      //Left Route Right


      //Left
      if(node.lef) _wak(node.left);

      //Route
      results.push(node.value);

      //Right
      if(node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }

  postOrder(){

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

module.exports = BinarySearchTree;