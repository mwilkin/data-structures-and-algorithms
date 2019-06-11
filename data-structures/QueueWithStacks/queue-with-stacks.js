'use strict';

const stack = require('../stacksAndQueues/stacks-and-queues.js');

class PseudoQueue(){
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
}

enqueue(value){
  this.stack1.push(value);
}

dequeue(){
  if(this.stack2.length === 0){
    if(this.stack1.length === 0) return 'Queue is empty';
    while(this.stack1.length > 0){
      let temp = this.stack1.pop();
      this.stack2.push(temp);
    }
  }
  return this.stack2.pop();
}

module.exports = PseudoQueue;