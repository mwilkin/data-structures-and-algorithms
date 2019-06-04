'use strict';

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    // this.head = null;
    this.head = new LinkedListNode();
  }

  insert(value){
    // if(!value) throw 'Missing value parameter';
    let node = new LinkedListNode(value);
    node.value = value;
    node.next = this.head;
    this.head = node;
    return node.value;


  //Placeholder for myself, considering changing insert
    // if(!this.head){
    //   this.head = node;
    //   return this.head;
    // }
    // node.next = this.head;
    // this.head = node;
    // return this.head;

  }

  includes(value){
    let thisNode = this.head;
    while(thisNode) {
      if(thisNode.value === value){
        return true;
      } else{
        thisNode = thisNode.next;
      }
    }
    return false;
  }

  append(value){
    let current = this.head;
    let newNode = new LinkedListNode(value);
    while(current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(value, newValue){
    let current = this.head;
    let newNode = new LinkedListNode(newValue);

    while(current.next !== null){
      if(current.value === value){
        newNode.next = this.head;
        this.head = newNode;
        return newValue;
      } else {
        while(current){
          if(current.next.value === value){
            newNode.next = current.next;
            current.next = newNode;
            return newValue;
          } else{
            current = current.next;
          }
        }
      }
    }

  }

  insertAfter(value, newValue){

    let newNode = new LinkedListNode(newValue);
    let current = this.head;

    while(current){
      if(current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return newValue;
      } else {
        current = current.next;
      }
    }
  }

  nthFromEnd(k){
    let length = 0;
    let current = this.head;

    while(current){
      length++;
      current = current.next;
    }

    if(0 > k || k > length){
      throw 'Please check input value';
    }

    let iterator = length - k;

    current = this.head;
    for(let i = 0; i < iterator+1; i++){
      current = current.next;
    }
    return current.value;
  }

  printList(){
    let current = this.head;
    while(current){
      console.log(current.value)
      current = current.next;
    }
  }
}


// Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

module.exports = LinkedList;
