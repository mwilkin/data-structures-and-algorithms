'use strict';

const LinkedList = require('../../linkedList/linked-list.js');

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




});