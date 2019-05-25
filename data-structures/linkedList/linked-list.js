'use strict';

class LinkedListNode {
  constructor(data) {
    this.data = data;
    // this.next = null;
    this.head = null;
  }

  insert(data){
    const newNode = new LinkedListNode(data);

    this[head] = newNode;

    // if(this[head] === null) {
    //   this[head] = newNode;
    // } else {
    //   let current = this[head];
    //   while(current.next !== null){
    //     current = current.next;
    //   }
    //   current.next = newNode;
    // }
  }

  includes(data){
    //returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  }

  printList(){
    let current = this.head;
    let string = '';
    while(current){
      str += current.element + ' ';
      current = current.next;
    }
    console.log(string);
    //returns a collection all of the current Node values in the Linked List.
  }
}

// Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

let ed = new LinkedListNode();

console.log(ed);
// console.log(ed.printList());
