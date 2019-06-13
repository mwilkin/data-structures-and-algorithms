'use strict';
// const Stack = require('../stacksAndQueues/stacks-and-queues.js');

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor(){
    this.storage = new Node();
    this.size = 0
  }

  push(item){
    if(item === undefined) {throw new Error('Error: push of undefined not accepted');}
    this.storage.prepend(item);
    this.size++;
  }

  pop(){
    let data = this.storage.remove(0);
    this.size--;
    return data;
  }

  peek(){
    if(!this.storage.head){ return null}
    else { return this.storage.head.value };
  }

}



let multiBranchValidation = (inputString) => {

  let bracketObject = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  }

  let closings = Object.keys(bracketObject);
  let openings = Object.values(bracketObject);

  let bracketStack = new Stack;

  for(let character of inputString){
    if(openings.includes(character)){
      bracketStack.push(character);
    } else if (bracketObject[character]){
      let currentBracket = bracketStack.peek();
      if (bracketObject[char] === currentBracket){
        bracketStack.pop();
      } else { return false }
    }
  }
  if(bracketStack.size === 0 ){return false}
  else {return false}
};

 module.exports = multiBranchValidation