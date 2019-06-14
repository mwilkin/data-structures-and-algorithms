'use strict';


const Shelter = require('../fifo-animal-shelter');

describe('FIFO Animal Shelter', () => {
  let rescueShelter;
  describe('enqueue tests', () => {
    it('should verify that whenan animal is enqueued, it is in the shelter', () => {
    rescueShelter = new Shelter();
    rescueShelter.enqueue('cat');

    expect(rescueShelter.stack1.peek()).toBe('cat');
    expect(rescueShelter.stack1.length).toBe(1);
  });

    it('should return an error nothing is passed into enqueued', () => {
      rescueShelter = new Shelter();
      expect( () => {
        rescueShelter.enqueue();
      }).toThrow('Error: enqueue of undefined not accepted');
    });
    
    it('should return an error when an animal other than a dog or cat is passed in', () => {
      rescueShelter = new Shelter();

      expect( () => {
        rescueShelter.enqueue('donkey');
      }).toThrow('This shelter only accepts dogs and cats!');
    });

  });
  
  describe('dequeue tests', () => {
    it('when no preference is given, the next animal in the queue is returned', () => {
      rescueShelter = new Shelter();
      rescueShelter.enqueue('cat');
      rescueShelter.enqueue('dog');
      let adoptedAnimal = rescueShelter.dequeue();
      expect(adoptedAnimal.value).toBe('cat');
    });

    it('dequeues cat from the front of the queue when the preference is cat', () => {
      rescueShelter = new Shelter();
      rescueShelter.enqueue('cat');
      rescueShelter.dequeue('dog');
      let adoptedAnimal = rescueShelter.dequeue('cat');
      expect(animal.value).toBe('cat');
    });

    it('dequeues first dog from queue when preference is dog', () => {
      rescueShelter = new Shelter();
      rescueShelter.enqueue('cat');
      rescueShelter.enqueue('dog');
      let adoptedAnimal = rescueShelter.dequeue('dog');
      expect(animal.value).toBe('dog');
    }); 
  });

});