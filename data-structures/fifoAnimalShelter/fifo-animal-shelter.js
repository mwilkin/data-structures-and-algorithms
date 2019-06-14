'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.length = 0;
  }

  push(value){
    if(!value) return false;
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length++;
  }

  pop(){
    let temp = this.top.value;
    this.top = this.top.next;
    this.length--;
    return temp;
  }

  peek() {
    if(!this.top){
      return null;
    } else {
      return this.top.value;
    }
  }
}

class PseudoQueue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    if(value === undefined) {throw new Error('Error: enqueue of undefined not accepted');}
    this.stack1.push(value);
  }
  
  dequeue(){
    if(this.stack2.length === 0){
      if(this.stack1.length === 0) return 'Queue is empty';
      while(this.stack1.length > 0){
        let temp = this.stack1.pop();
        this.stack2.push(temp);
      }
    }
    return this.stack2.pop();
  }
}


class AnimalShelter extends PseudoQueue{
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
 
    }
    //if preference isn't cat or dog give them the first at the queue as if no preference
    return super.dequeue();
  }
}

module.exports = AnimalShelter;
