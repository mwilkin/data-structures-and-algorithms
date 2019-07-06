'use strict';
//double check all this. 

const { HashTable } =require('./hashTable');

describe('Hash Table', () => {
  it('should construct a Hash Table', () => {
    //Arrange
    let hashTable;
    let expectedSize = 42;

    //Act
    hashTable = new HashTable(expectedSize);

    //Assert

  });
}); 


describe('hash(key) function', () => {
  it('should has cat to 3 with 5 buckets', () => {
    //Arrange
    let expectedHash = 3;
    let key = 'cat';
    let hashTable = new HashTable(5);

    //Act
    let result = hashTable.hash(key);

    
    //Assert

  });

});