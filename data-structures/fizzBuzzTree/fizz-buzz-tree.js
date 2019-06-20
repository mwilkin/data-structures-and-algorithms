'use strict';

// const Tree = require('../tree/tree.js');
// const TreeNode = require('../tree/node/index.js');

let fizzBuzzTree = (binarySearchTree) => {

  let _walkTransform = (node) => {
    if(node.left){ _walkTransform(node.left);
    }
    if(node.value % 15 === 0){
      node.value = 'fizzbuzz';
    } else if (node.value % 5 === 0) {
      node.value = 'buzz';
    } else if (node.value % 3 === 0) {
      node.value = 'fizz';
    }
    if (node.right){ _walkTransform(node.right);
    }
  };
  _walkTransform(binarySearchTree.root);
  return binarySearchTree;
};

module.exports = fizzBuzzTree;
