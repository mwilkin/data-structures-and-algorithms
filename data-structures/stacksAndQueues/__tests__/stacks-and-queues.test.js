'use strict';

const stacksAndQueues = require('../stacks-and-queues');

// Can successfully push onto a stack
// Can successfully push multiple values onto a stack
// Can successfully pop off the stack
// Can successfully empty a stack after multiple pops
// Can successfully peek the next item on the stack
// Can successfully instantiate an empty stack
// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue

describe('Stacks and Queues Tests', () => {
  let Stack = stacksAndQueues.Stack;
  

  describe('Stacks', () => {
    let stack;
    beforeEach(() => {
      stack = new Stack();
    });

    it('can successfully push onto a stack', () => {
        stack.push(7);
        expect(stack.top).toBeDefined();
        expect(stack.top.value).toBe(7);
    });

    it('can successfully push multiple values onto a stack', () => {
      stack.push(10);
      stack.push(20);
      stack.push(30);
      stack.push(40);
      expect(stack.top.value).toBe(40);
    });
  });


  describe('Queues', () => {

  });

});