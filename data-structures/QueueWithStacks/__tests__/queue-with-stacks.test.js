'use strict';

const QueuesAndStacks = require('../queue-with-stacks');

// const QueuesAndStacks = require('../../stacksAndQueues/stacks-and-queues.js');

describe('Queue with Stacks Tests', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new QueuesAndStacks();
  });

  it('should instantiate a queue', () => {
    expect(pseudoQueue).toBeDefined();
    expect(pseudoQueue).toBeInstanceOf(QueuesAndStacks);
  });

  it('should instantiate 2 Stacks', () => {
    expect(pseudoQueue.stack1).toBeDefined();
    expect(pseudoQueue.stack2).toBeDefined();
  });

  it('can successfully enqueue a item into a queue', () => {
    pseudoQueue.enqueue(9);
    expect(pseudoQueue.stack1.peek()).toBe(9);
    expect(pseudoQueue.stack1.length).toBe(1);
  });

  it('can successfully enqueue many items into a queue', () => {
    pseudoQueue.enqueue(3);
    pseudoQueue.enqueue(6);
    pseudoQueue.enqueue(9);
    pseudoQueue.enqueue(12);
    expect(pseudoQueue.stack1.peek()).toBe(12);
    expect(pseudoQueue.stack1.length).toBe(4);
  });

  it('can successfully dequeue one item', () => {
    pseudoQueue.enqueue(3);
    pseudoQueue.enqueue(6);
    pseudoQueue.enqueue(9);
    pseudoQueue.enqueue(12);
    expect(pseudoQueue.dequeue()).toEqual(3);
  });

  it('can successfully dequeue many items', () => {
    pseudoQueue.enqueue(3);
    pseudoQueue.enqueue(6);
    pseudoQueue.enqueue(9);
    pseudoQueue.enqueue(12);
    pseudoQueue.dequeue();
    expect(pseudoQueue.dequeue()).toEqual(6);
  });

  it('can successfully empty the queue', () => {
    pseudoQueue.enqueue(3);
    pseudoQueue.enqueue(6);
    pseudoQueue.enqueue(9);
    pseudoQueue.enqueue(12);
    pseudoQueue.dequeue();
    expect(pseudoQueue.dequeue()).toEqual(6);
    expect(pseudoQueue.dequeue()).toEqual(9);
    expect(pseudoQueue.dequeue()).toEqual(12);
    expect(pseudoQueue.stack1.length).toBe(0);
    expect(pseudoQueue.stack2.length).toBe(0);
  });

});
