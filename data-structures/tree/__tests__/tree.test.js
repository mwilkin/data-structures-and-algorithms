'use strict';

// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// Can successfully add a left child and right child to a single root node
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal


'use strict';

const Tree = require('../tree.js');
const TreeNode = require('../node/index.js');

describe('tree constructor', () => {

  it('tree constructor returns object', () => {
    let actual = new Tree();

    expect(typeof actual).toBe('object');
    expect(actual).toBeDefined();
  });

  it('can successfully instantiate a tree with a single root node', ()=> {

  });

  it('tree constructor returns object with root and value', () => {
    let node = new TreeNode(5);
    let actual = new Tree(node);

    expect(actual.root.value).toBe(5);
  })

});


describe('tree add method', () => {

  it('Adding a node adds to root', () => {
    let testTree = new Tree(new TreeNode(5));
    expect(testTree.root.value).toBe(5);
  });

  it('Adding 4 nodes adds to root children properly', () => {
    let testTree = new Tree(new TreeNode(3));
    testTree.add(new TreeNode(5));
    testTree.add(new TreeNode(4));
    testTree.add(new TreeNode(7));
    expect(testTree.root.right.left.value).toBe(4);
    expect(testTree.root.right.right.value).toBe(7);
  });

  it('add method only works with numbers', () => {
    expect(() => {
      let testTree = new Tree(new TreeNode(5));
      testTree.add(new TreeNode('asdf'));
      console.log(testTree);
    }).toThrow('Value already exists in Binary Search Tree');
  });

});

describe('contains method', () => {

  let testTree = new Tree(new TreeNode(5));
  let node3 = new TreeNode(3);
  let node7 = new TreeNode(7);

  it('that contains method returns root node from BST', () => {
    
    expect(testTree.contains(5)).toBeTruthy();
  })

  it('should return false if tree does not contain value', () => {
    expect(testTree.contains(100)).toBeFalsy();
  });

  it('should return error if no value is given', () => {
    expect(testTree.contains()).toEqual('No value given');
  });

  it('that contains method returns a node from BST with 3 nodes', () => {



  })
});