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

}
// dequeue(pref){

// }

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



module.exports = AnimalShelter;
