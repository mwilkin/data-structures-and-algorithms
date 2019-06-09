'use strict';

const stacksAndQueues = require('../stacks-and-queues');

describe('Stacks and Queues Tests', () => {
  let Stack = stacksAndQueues.Stack;
  let Queue = stacksAndQueues.Queue;

  describe('Stacks tests', () => {
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
      expect(stack.top.next.value).toBe(30);
      expect(stack.top.next.next.value).toBe(20);
      expect(stack.top.next.next.next.value).toBe(10);
    });

    it('can successfully pop the top item off the stack', () => {
      stack.push(10);
      stack.push(20);
      stack.push(30);
      stack.push(40);
      stack.pop();
      expect(stack.top.value).toBe(30);
    });

    it('can successfully empty a stack after multiple pops', ()=> {
      stack.push(10);
      stack.push(20);
      stack.push(30);
      stack.push(40);
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.top).toBeNull();
      expect(stack).toBeInstanceOf(Stack);
    });

    it('can successfully peek the next item on the stack', () => {
      stack.push(11);
      stack.push(22);
      stack.push(33);
      expect(stack.peek()).toBe(33);
    });

    it('can successfully instantiate an empty stack', ()=> {
      expect(stack).toBeInstanceOf(Stack);
      expect(stack.peek()).toBeNull();
    });

  });

// Can successfully instantiate an empty queue
  describe('Queues tests', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue();
    });

    it('can successfully enqueue into a queue', () => {
      queue.enqueue(10);
      expect(queue.front.value).toBe(10);
    });

    it('can successfully enqueue multiple values into a queue', () => {
      queue.enqueue(10);
      queue.enqueue(11);
      queue.enqueue(12);
      queue.enqueue(13);
      expect(queue.front.value).toBe(10);
      expect(queue.front.next.value).toBe(11);
      expect(queue.front.next.next.value).toBe(12);
      expect(queue.front.next.next.next.value).toBe(13);
    });

    it('can successfully dequeue out of a queue the expected value', () => {
      queue.enqueue(10);
      queue.enqueue(11);
      queue.enqueue(12);
      queue.enqueue(13);
      queue.dequeue();
      expect(queue.front.value).toBe(11);
      expect(queue.front.next.value).toBe(12);
    });

    it('can successfully empty a queue after multiple dequeues', () => {
      queue.enqueue(10);
      queue.enqueue(11);
      queue.enqueue(12);
      queue.enqueue(13);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.front).toBeNull();
      expect(queue).toBeInstanceOf(Queue);
    });

    it('can successfully peek into a queue, seeing the expected value', () => {
      queue.enqueue(5);
      queue.enqueue(15);
      queue.enqueue(25);
      expect(queue.peek()).toBe(5);

    });

    
  });

});