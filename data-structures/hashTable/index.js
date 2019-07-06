'use strict';

const { HashTable } = require('./hashTable');

let hashTable = new HashTable(5);

hashTable.add('cat', 42);
hashTable.add('foo', 55);
hashTable.add('bbt', 24);



let key = 'pig';
let value = 'round';
const index = hashTable.hash(key);
let table =hashTable.add(key, value);

console.log(hashTable.buckets[0].values());

hashTable.prettyPrint();
