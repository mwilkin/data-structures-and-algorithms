'use strict';
// const Queue = require('../stacksAndQueues/stacks-and-queues');

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
    let node = new Node(item);
    if(!item) return false;
    node.next = this.top;
    this.top = node;
  }

  pop() {
    this.top = this.top.next;
  }

  peek() {
    if(!this.top) {
      return null;
    } else {
      return this.top.value;
    }
  }
}

class Queue {
  constructor(){
  this.front = null;
  }

  enqueue(item){

    let node = new Node(item);
    let current = this.front;
    if(!item) return false;

    if(!this.front){
      this.front = node;
    } else {
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

  dequeue(){
    this.front = this.front.next;
  }

  peek(){
    if(!this.front){
      return null;
    } else {
      return this.front.value;
    }
  }
}


class AnimalShelter extends Queue{
  constructor(){
    super();
  }

  
  enueue(animal) {
    if(animal !== 'cat' && animal !== 'dog'){
      throw new Error('This shelter only accepts dogs and cats!');
    }
    super.enqueue(animal);
  }


  dequeue(pref){
    if (pref === 'cat' || pref === 'dog') {

      //if pref=== cat, dequeue 1st cat

      //if pref === dog, dequeue 1st dog
      
    }
    //if preference isn't cat or dog give them the first at the queue as if no preference
    return super.dequeue();
  }
}

module.exports = AnimalShelter;
