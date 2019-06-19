'use strict';

const Tree = require('../tree.js');
const TreeNode = require('../node/index.js');


describe('tree constructor', () => {
  it('tree constructor returns object', () => {
    let actual = new Tree();

    expect(typeof actual).toBe('object');
    expect(actual).toBeDefined();
  });

  it('tree constructor returns object with root and value', () => {
    let node = new TreeNode(5);
    let actual = new Tree(node);

    expect(actual.root.value).toBe(5);
  });
});

describe('tree add method', () => {
  it('Adding a node adds to root', () => {
    let testTree = new Tree(new TreeNode(5));
    expect(testTree.root.value).toBe(5);
  });

  it('Adding multiple nodes adds to root children properly', () => {
    let testTree = new Tree(new TreeNode(3));
    testTree.add(5);
    testTree.add(4);
    expect(testTree.root.value).toBe(3);
    // expect(testTree.right.value).toBe(5);
  });
});

describe('contains method', () => {

  let testTree = new Tree(new TreeNode(5));

  it('that contains method returns root node from BST', () => {
    expect(testTree.contains(5)).toBeTruthy();
  });

  it('should return false if tree does not contain value', () => {
    expect(testTree.contains(100)).toBeFalsy();
  });

  it('should return error if no value is given', () => {
    expect(testTree.contains()).toEqual('No value given');
  });

});

describe('preOrder method', () => {
  let testTree;
  beforeEach(() => {
    testTree = new Tree(new TreeNode());
    // create root
    testTree.root = {value: 25, left: null, right: null};
    // root.left
    testTree.root.left = {value: 15, left: null, right: null};
    // root.left.left
    testTree.root.left.left = {value: 10, left: null, right: null};
    // root.left.right
    testTree.root.left.right = {value: 20, left: null, right: null};
    // root.right
    testTree.root.right = {value: 30, left: null, right: null};
    // root.right.right
    testTree.root.right.right = {value: 35, left: null, right: null};
    // root.right.left
    testTree.root.right.left = {value: 28, left: null, right: null};
  });

  it('can successfully return a collection from a preorder traversal', () => {
    // let preOrderTestTree = testTree.preOrder();
    expect(testTree.preOrder()).toBeDefined();
    expect(testTree.preOrder()).toEqual([25, 15, 10, 20, 30, 28, 35]);
  });
});

describe('inOrder method', () => {
  let testTree;
  beforeEach(() => {
    testTree = new Tree(new TreeNode());
    // create root
    testTree.root = {value: 25, left: null, right: null};
    // root.left
    testTree.root.left = {value: 15, left: null, right: null};
    // root.left.left
    testTree.root.left.left = {value: 10, left: null, right: null};
    // root.left.right
    testTree.root.left.right = {value: 20, left: null, right: null};
    // root.right
    testTree.root.right = {value: 30, left: null, right: null};
    // root.right.right
    testTree.root.right.right = {value: 35, left: null, right: null};
    // root.right.left
    testTree.root.right.left = {value: 28, left: null, right: null};
  });

  it('can successfully return a collection from an inorder traversal', () => {
    expect(testTree.inOrder()).toBeDefined();
    expect(testTree.inOrder()).toEqual([10, 15, 20, 25, 28, 30, 35]);
  });
});

describe('postOrder method', () => {
  let testTree;
  beforeEach(() => {
    testTree = new Tree(new TreeNode());
    // create root
    testTree.root = {value: 25, left: null, right: null};
    // root.left
    testTree.root.left = {value: 15, left: null, right: null};
    // root.left.left
    testTree.root.left.left = {value: 10, left: null, right: null};
    // root.left.right
    testTree.root.left.right = {value: 20, left: null, right: null};
    // root.right
    testTree.root.right = {value: 30, left: null, right: null};
    // root.right.right
    testTree.root.right.right = {value: 35, left: null, right: null};
    // root.right.left
    testTree.root.right.left = {value: 28, left: null, right: null};
  });

  it('can successfully return a collection from a postorder traversal', () => {
    expect(testTree.postOrder()).toBeDefined();
    expect(testTree.postOrder()).toEqual([10, 20, 15, 28, 35, 30, 25]);
  });
});

describe('breadthFirst traversal', () => {
  it('should throw and error if root is null', () => {
    let testTree = new Tree(new TreeNode());
    let result = testTree.breadthFirst();
    expect(( ) => {
      result.breadthFirst();
    }).toThrow();
  });

  it('should properly traverse the tree in a breadth-first manner', () => {
    /*
             2
            / \
          10   20
         /  \    \
        5   12   14
    */

    let testTree = new Tree(new TreeNode(2));
    testTree.root.left = new TreeNode(10);
    testTree.root.left.right = new TreeNode(12);
    testTree.root.left.left = new TreeNode(5);
    testTree.root.right = new TreeNode(20);
    testTree.root.right.right = new TreeNode(14);
    let result = testTree.breadthFirst();

    expect(result).toEqual([2,10,20,5,12,14]);
  });
});
