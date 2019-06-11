'use strict'

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

});
