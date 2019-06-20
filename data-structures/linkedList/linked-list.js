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
    this.length = 0;
  }

  insert(value){
    // if(!value) throw 'Missing value parameter';
    let node = new LinkedListNode(value);
    node.value = value;
    node.next = this.head;
    this.head = node;
    this.length++;
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
    let newNode = new LinkedListNode(value);
    let current = this.head;

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
    return 'Node not found';
  }

  kthFromEnd(k){
    let current = this.head;
    let index = (this.length - k) -1;

    if(k > this.length || k < 0){
      return 'Index is invalid';
    } else if(k === this.length){
      return this.head.value;
    }
    for(let i = 0; i <= index; i++){
      if(i === index){
        return current.value;
      } else {
        current = current.next;
      }
    }

  }

  printList(){
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }

    return results;

  }
}

module.exports = LinkedList;
