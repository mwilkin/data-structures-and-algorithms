# Stacks and Queues Data Structures

Implementing utilizing classes

## Challenge



## Approach & Efficiency

I reviewed the class demo, did a lot of research to learn more about Stacks and Queues, and then planned my project, wrote my tests, then executed the code.

## Methods: 

Stack Class:

  `push`: takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.

  `pop`: does not take any argument, removes the node from the top of the stack, and returns the node’s value.

  `peek`: that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.

Queue Class:

  `enqueue`: takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

  `dequeue`: that does not take any argument, removes the node from the front of the queue, and returns the node’s value.

  `peek`: that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

<img src="" width="400">

------
------
Features

Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

Create a Stack class that has a top property. It creates an empty Stack when instantiated.

This object should be aware of a default empty value assigned to top when the stack is created.

Define a method called `push` which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.

Define a method called `pop` that does not take any argument, removes the node from the top of the stack, and returns the node’s value.

Define a method called `peek` that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.

Create a Queue class that has a top property. It creates an empty Queue when instantiated.

This object should be aware of a default empty value assigned to front when the queue is created.

Define a method called `enqueue` which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

Define a method called `dequeue` that does not take any argument, removes the node from the front of the queue, and returns the node’s value.

Define a method called `peek` that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

Be sure to follow your languages best practices for naming conventions.
You have access to the Node class and all the properties on the Linked List class.

Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

Can successfully push onto a stack
Can successfully push multiple values onto a stack
Can successfully pop off the stack
Can successfully empty a stack after multiple pops
Can successfully peek the next item on the stack
Can successfully instantiate an empty stack
Can successfully enqueue into a queue
Can successfully enqueue multiple values into a queue
Can successfully dequeue out of a queue the expected value
Can successfully peek into a queue, seeing the expected value
Can successfully empty a queue after multiple dequeues
Can successfully instantiate an empty queue