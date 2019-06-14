'use strict';

// Tests 
// it can instantiation of dogQueue
// it can instantiation of catQueue
// it can enqueue cat to catQueue
// it can enqueue multiple cats to catQueue
// it can enqueue dog to dogQueue
// it can enqueue multiple dogs to dogQueue
// it can dequeue a cat from catQueue
// it can dequeue multiple cats from catQueue
// it can dequeue a dog from dogQueue
// it can dequeue multiple dogs from dogQueue
// it can empty dogQueue
// it can empty catQueue


const Shelter = require('../fifo-animal-shelter');

describe('FIFO Animal Shelter', () => {
  let rescueShelter;

  it('should verify that whenan animal is enqueued, it is in the shelter', () => {
    rescueShelter = new Shelter();
    rescueShelter.enqueue('cat');

    expect(rescueShelter.stack1.peek()).toBe('cat');
    expect(rescueShelter.stack1.length).toBe(1);
  });

  it('should return an error no animal is passed into enqueued', () => {
    rescueShelter = new Shelter();
    expect( () => {
      rescueShelter.enqueue();
    }).toThrow('Error: enqueue of undefined not accepted');
  });
  
  

});