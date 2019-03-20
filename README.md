# Data Structures

---

## Running

Assuming you have Testem globally installed (`npm install -g testem`), simply run `npm test` in this project's root directory to test all suites at once. You can also run `testem` from inside a folder to test just that suite.

### The Queue ADT

Avoid using JavaScript's built in `push`/`pop`/`shift`/`unshift` functions, nor any other `Array.prototype` methods, nor `.length`. You may use an Object or Array to store your data and keep `head` and `tail` pointers (variables) that change when functions like `enqueue` and `dequeue` are called.

Since a Queue is an ADT, it has more than one DS which can be used to solve it. When you're done with your Linked List, try returning to this suite and using your Linked List class (copy it over) to implement the Queue.

### The Linked List DS

A simple implementation of a doubly linked list

### Binary Search Tree DS

BSTs are highly recursive structures — many of your methods should employ recursion.

### Hash Table DS

Keeping track of what is going where and how to access it in this suite may be tricky. Make use of the Linked List data structure.