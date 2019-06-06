'use strict';

const LinkedList = require('../../linkedList/linked-list.js');
const mergedLinkedLists = require('../ll-merge.js');

describe('Merged Linked List Module', () => {
  let list1;
  let list2;
  beforeEach(() => {
    list1 = new LinkedList();
    list2 = new LinkedList();
  });

  describe('constructor', () => {
    it('Can successfully instantiate an empty linked list', () => {
      expect(list1).toBeDefined();
    });
    it('Can successfully instantiate a 2nd empty linked list', () => {
      expect(list2).toBeDefined();
    });
  });

  it('should be created successfully', () => {
    let node3 = {value: 3, next: null};
    let node2 = {value: 2, next: node3};
    let node1 = {value: 1, next: node2};
    list1.head = node1;
    list1.length = 3;

    list2.head = node1;
    list2.length = 3;

    let zippedList = mergedLinkedLists(list1, list2);
    expect(zippedList).toBeDefined();

  })

  it('should contain a value from list 2 after successful merge', ()=> {
    let node3 = {val: 3, next: null};
    let node2 = {val: 2, next: node3};
    let node1 = {val: 1, next: node2};

    let node13 = {val: 30, next: null};
    let node12 = {val: 20, next: node13};
    let node10 = {val: 10, next: node12};

    list1.head = node1;
    list1.length = 3;

    list2.head = node10;
    list2.length = 3;
    let newList = mergedLinkedLists(list1, list2);
    expect(newList.next.next.next.value).toEqual(20);
  });

  it('can merge two lists of the same length', () => {
    let node4 = {value: 4, next: null};
    let node3 = {value: 3, next: node4};
    let node2 = {value: 2, next: node3};
    let node = {value: 1, next: node2};
    
    list1.head = node;
    list1.length = 4;
    console.log(list1.head);
    list2.head = node;
    list2.length = 4;

    expect(mergedLinkedLists(list1, list2)).toEqual(list1.head);

  });
});