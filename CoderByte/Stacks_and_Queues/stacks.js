// Using an Array

const myStack = [];
myStack.push("a");
myStack.push("b");
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.push("c");
myStack.push("d");
console.log(myStack);

// Linked List
class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  #top;
  constructor() {
    this.#top = null;
    this.size = 0;
  }

  push(val) {
    const curr = this.#top;
    this.#top = new StackNode(val);
    this.#top.next = curr;
    this.size++;
  }

  pop() {
    if (!this.#top) return null;
    const poppedNode = this.#top.val;
    this.#top = this.#top.next;
    this.size--;
    return poppedNode;
  }

  getTop() {
    return this.#top.val;
  }

  print() {
    return this.#print(this.#top);
  }
  #print(curr) {
    if (!curr) return "";
    return `${curr.val} -> ${this.#print(curr.next)}`;
  }
}

const stack = new Stack();
console.log(stack.pop());
stack.push("a");
stack.push("b");
stack.push("c");

console.log(stack.size);
console.log(stack.getTop());
console.log(stack.print());