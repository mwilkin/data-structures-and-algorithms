// Write tests to prove the following functionality:

// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list

'use strict';

const LinkedList = require('../linked-list.js');

describe('Linked List Module', () => {
  let list = new LinkedList();

  // let list;
  //beforeEach(() => {
  //   list = new LinkedList
  // }

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
      // expect(list.tail.value).toEqual(2);
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
    it('Can properly return a collection of all the values that exist in the linked list', () =>{
      expect(list.printList()).toEqual([100, 45, 21, 16, 30, 9, 7, 4, 2, 2, 1, 7, 7]);
    });

    // note to self: insert console.log in print function for this to work
    // it('should console.log zero times for and empty list', () => {
    //   let mockConsoleLog = jest.spyOne(console, 'log');
    //    mockConsoleLog.mockImplementation(() => true);
    //    list.print();
    //    expect(mockConsoleLog).not ...(finish this from the video class 6 @ 9:42AM)
    // });

  });

  //it('should throw an error when no value is passed',()=>{
  // var error;
  // try{
  // 
  // }
 // });


})