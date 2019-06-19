'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree.js');

const BinarySearchTree = require('../../tree/tree.js');

const Node = require('../../tree/node/index.js');

describe('fizzBuzz function(treeObj) ', () => {
  let bst = new BinarySearchTree();

  beforeEach(() => {
    let root = new Node(15);
    let five = new Node(5);
    let eighteen = new Node(18);
    let thirty = new Node(30);
    let twentytwo = new Node(22);
    let two = new Node(2);

    root.left = five;
    root.right = eighteen;
    root.right.right = thirty;
    root.left.left = twentytwo;
    root.left.left.left = two;

    bst.root = root;
  });

  it('should return instance of BST', () => {
    expect(bst).toBeInstanceOf(BinarySearchTree);
  });

  it('should change value of root.left from 5 to buzz', () => {
    fizzBuzzTree(bst);
    expect(bst.root.left.value).toBe('buzz');
  });

  it('should change value of root.right from 18 to Fizz', () => {
    fizzBuzzTree(bst);
    expect(bst.root.right.value).toBe('fizz');
  });
  
  it('should change value of root.right.right from 30 to FizzBuzz', () => {
    fizzBuzzTree(bst);
    expect(bst.root.right.right.value).toBe('fizzbuzz');
  });

  it('should not change value of root.left.left.left from 2', () => {
    fizzBuzzTree(bst);
    expect(bst.root.left.left.left.value).toBe(2);
  });

});