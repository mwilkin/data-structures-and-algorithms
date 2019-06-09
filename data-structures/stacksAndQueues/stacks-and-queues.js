'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    if(!item) return false;
    let node = new Node(item);
    node.next = this.top;
    this.top = node;
  }
}

module.exports = {Stack};