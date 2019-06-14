'use strict';

const stack = require('../stacksAndQueues/stacks-and-queues.js')

const queue = require('../QueuesWithStacks/queue-with-stacks.js')

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.front = null;
  }

  // Todo: need to define Enqueue method
  // Todo: need to define Dequeue method
  // Todo: need to define Peek method


  // enqueue(animal){
  // if animal === cat -> push into catQueue
  // iterate counter
  // if animal === dog -> push into dogQueue
  // iterate counter
  // }

  // dequeue(pref){
  // if pref !== cat || pref !== dog return null
  // if pref === cat, dequeue from catQueue
  // if pref === dog, dequeue from dogQueue
  // }

} 



class AnimalShelter{
  constructor(){
    this.cats = new Queue();
    this.dogs = new Queue();
  }
  
}
  

