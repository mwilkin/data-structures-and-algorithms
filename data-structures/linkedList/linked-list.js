'use strict';

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
  }

  insert(value){
    // if(!value) throw 'Missing value parameter';
    let node = new LinkedListNode(value);
    node.value = value;
    node.next = this.head;
    this.head = node;
    return node.value;
  }

  includes(value){
    //returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
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

  printList(){
    let current = this.head;
    let results = [];
    while(current){
      results.push(current.value);
      current = current.next;
    }
    return results;
  }
}

module.exports = LinkedList;
