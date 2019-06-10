'use strict';

const stack = require('../stacksAndQueues/stacks-and-queues.js');

class PseudoClass(){
  constructor(){
    this.stack1 = new stack();
    this.stack2 = new stack();
  }
}

enqueue(value){
  this.stack1.push(value);
}

dequeue(){
  let temp = this.stack1.pop();
  stack2.push(temp);
}

