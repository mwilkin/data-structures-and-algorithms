'use strict';

const LinkedList = require('../linked-list.js');

describe('Linked List Module', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  describe('constructor', () => {
    it('Can successfully instantiate an empty linked list', () => {
      expect(list).toBeDefined();
    });
  });

  describe('insert(value) method', () => {
    it('Can properly insert into the linked list', () => {
      list.insert(7);
      expect(list.insert(7)).toEqual(7);
    });

    it('The head property will properly point to the first node in the linked list', () => {
      list.insert(1);
      list.insert(2);
      expect(list.head.value).toEqual(2);
    });

    it('Can properly insert multiple nodes into the linked list', () => {
      list.insert(2);
      list.insert(4);
      list.insert(7);
      expect(list.head.next.value).toEqual(4);
    });
  });

  it('Will return true when finding a value within the linked list that exists', () =>{
    list.insert(9);
    list.insert(30);
    list.insert(16);
    expect(list.includes(30)).toEqual(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () =>{
    list.insert(21);
    list.insert(45);
    list.insert(100);
    expect(list.includes(22)).toEqual(false);
  });

  describe('the print method', () => {
    it('Can properly console log all the values that exist in the linked list', () =>{
      let mockConsoleLog = jest.spyOn(console, 'log');

      mockConsoleLog.mockImplementation(() => true);

      list.printList();

      expect(mockConsoleLog).toBeCalled();
    });
  });

  describe('append method', () => {
    it ('should successfully add an element to the end of the list', () => {
      list.insert(1);
      list.append(20);
      expect (list.head.next.next.value).toEqual(20);

    });

    it('can append multiple nodes to the end of the list', () => {
      list.insert(4);
      list.append(7);
      list.append(12);
      expect(list.head.next.next.value).toEqual(7);
      expect(list.head.next.next.next.value).toEqual(12);
    });
  });

});


  describe('insertBefore method', () => {
    it('can insert a node before a designated node', () => {
      list.insert(2);
      list.insert(5);
      list.insert(7);
      list.insertBefore(5, 22);
      expect(list.head.next.value).toEqual(22);
    });

    it('can insert a new node before the first node', () => {
      list.insert(1);
      list.insert(2);
      list.insert(3);
      list.insertBefore(3, 0);
      expect(list.head.value).toEqual(0);
    });
  });

  describe('insertAfter method', () => {
    it('can insert a node after a designated node', () => {
      list.insert(2);
      list.insert(4);
      list.insert(6);
      list.insertAfter(4, 9);
      expect(list.head.next.next.value).toEqual(9);
    });

    it('can insert a node after the last node', () => {

      let node3 = {value: 33, next: null};
      let node2 = {value: 22, next: node3};
      let node = {value: 11, next: node2};
      list.head = node;
      list.insertAfter(33, 1);
      expect(list.head.next.next.next.value).toEqual(1);
    });
  });

});

// Class 7

describe('kthFromEnd()', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  it('Where k is greater than the length of the linked list ', () => {
    let node3 = {value: 3, next: null};
    let node2 = {value: 2, next: node3};
    let node = {value: 1, next: node2};
    list.head = node;

    expect(list.kthFromEnd(5)).toEqual('Index is invalid');
  });

  it('Where k and the length of the list are the same', () => {
    let node3 = {value: 3, next: null};
    let node2 = {value: 2, next: node3};
    let node = {value: 1, next: node2};
    list.head = node;
    list.length = 3;
    expect(list.kthFromEnd(3)).toEqual(1);
  });

  it('Where k is not a positive integer', () => {
    let node4 = {value: 4, next: null};
    let node3 = {value: 3, next: node4};
    let node2 = {value: 2, next: node3};
    let node = {value: 1, next: node2};
    list.head = node;

    expect(list.kthFromEnd(-1)).toEqual('Index is invalid');
  });

  it('Where the linked list is of a size 1', () => {
    let node = {value: 1, next: null};
    list.head = node;
    list.length = 1;

    expect(list.kthFromEnd(1)).toEqual(1);
  });

  it('"Happy Path" where k is not at the end, but somewhere in the middle of the linked list', () => {
    let node5 = {value: 5, next: null};
    let node4 = {value: 4, next: node5};
    let node3 = {value: 3, next: node4};
    let node2 = {value: 2, next: node3};
    let node = {value: 1, next: node2};
    list.head = node;
    list.length = 5;

    expect(list.kthFromEnd(1)).toEqual(4);
  });
});
