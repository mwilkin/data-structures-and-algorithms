'use strict';

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = null;
    // this.head = null;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
  }

  insert(value){
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

    // let string = '';
    // while(current){
    //   str += current.element + ' ';
    //   current = current.next;
    // }
    // console.log(string);
    // //returns a collection all of the current Node values in the Linked List.
    // return string;
  }
}


// Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

module.exports = LinkedList;
