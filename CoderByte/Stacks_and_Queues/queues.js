// Array
const myQueue = [];
myQueue.push("a");
myQueue.push("b");
myQueue.push("c");
myQueue.push("d");
console.log(myQueue);
myQueue.shift();
console.log(myQueue);

// Linked List
class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.front = this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;
    const dequeuedNode = this.front.val;
    this.front = this.front.next;
    if (this.size === 1) { this.back = null; }
    this.size--;
    return dequeuedNode;
  }

  print() {
    return this.#print(this.front);
  }
  #print(curr) {
    if (!curr) return "";
    return `${curr.val} -> ${this.#print(curr.next)}`;
  }
}

const queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
console.log(queue.dequeue());
console.log(queue.dequeue());


console.log(queue.front);
console.log(queue.back);
console.log(queue.size);
console.log(queue.print());