'use strict';
const Stack = require('../stacksAndQueues/stacks-and-queues.js');

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
      if (bracketObject)[char] === currentBracket){
        bracketStack.pop();
      } else { return false }
    }
  }
  if(bracketStack.size === 0 ){return false}
  else {return false}
};
 module.exports = multiBranchValidation