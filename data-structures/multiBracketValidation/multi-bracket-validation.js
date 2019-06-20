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
    this.size = 0;
  }

  push(item){
    let node = new Node(item);
    if(item === undefined) {throw new Error('Error: push of undefined not accepted');}
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop(){
    this.top = this.top.next;
    this.size--;
  }

  peek(){
    if(!this.top) {
      return null;
    } else {
      return this.top.value;
    }
  }

}


function multiBranchValidation(inputString){

  let bracketObject = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  };

  // let closings = Object.keys(bracketObject);
  let openings = Object.values(bracketObject);

  let bracketStack = new Stack;

  for(let character of inputString){
    if(openings.includes(character)){
      bracketStack.push(character);
    } else if (bracketObject[character]){
      let currentBracket = bracketStack.peek();
      if (bracketObject[character] === currentBracket){
        bracketStack.pop();
      } else return false;
    }
  }
  if(bracketStack.size === 0 ){
    return true;
  } else return false;
}

module.exports = multiBranchValidation;
