'use strict';

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



module.exports = {Stack, Queue};