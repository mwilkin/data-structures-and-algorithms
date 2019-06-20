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
    let temp = this.top;
    this.top = this.top.next;
    return temp.val;
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
    this.tail = null;
  }

  enqueue(value){
    let node = new Node(value);

    if(this.tail === null) {
      this.front = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }

    // let current = this.front;
    // if(!value) return false;

    // if(!this.front){
    //   this.front = node;
    // } else {
    //   while(current.next){
    //     current = current.next;
    //   }
    //   current.next = node;
    // }
  }

  dequeue(){
    if(this.front !== null){
      let temp = this.front;
      this.front = this.front.next;
      return temp.value;

    } else return null;
  }

  peek(){
    if(!this.front){
      return null;
    } else {
      return this.front.value;
    }
  }
}

module.exports = {Node, Stack, Queue};
