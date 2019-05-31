// Write tests to prove the following functionality:

// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list

'use strict';

const linkedList = require('../linked-list.js');

describe('Linked List Module', () => {
  let list = new linkedList();

  it('Can successfully instantiate an empty linked list', () => {
    expect(list).toBeDefined();
  });

  it('Can properly insert into the linked list', () => {
    list.insert(7);
    expect(list.insert(7)).toEqual(7);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    list.insert(1);
    expect(list.head.value).toEqual(1);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    list.insert(2);
    list.insert(4);
    list.insert(7);
    expect(list.head.next.value).toEqual(4);
    // expect(list.tail.value).toEqual(2);
  });

})