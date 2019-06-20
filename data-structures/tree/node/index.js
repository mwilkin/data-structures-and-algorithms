'use strict';

class Node {
  constructor(value, left, right) {
    this.value = value || null;
    this.left = left || null;
    this.right = right || null;
  }
}

module.exports = Node;
