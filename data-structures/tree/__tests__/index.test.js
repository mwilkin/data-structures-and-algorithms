'use strict';

const TreeNode = require('../node/index.js');

describe('binary tree node', () => {

  it('should show that new node returns an object', () => {
    let actual = new TreeNode(5);
    expect(typeof actual).toBe('object');
  })

  it('should show that new node returns value input into constructor', () => {
    let actual = new TreeNode(42);
    expect(actual.value).toBe(42);
  })

  it('should show that new node with no value input returns error', () => {
    expect(() => new TreeNode()).toThrow('Error: cannot enter value of null or undefined');
  })
});