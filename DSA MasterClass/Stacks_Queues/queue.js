class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(val) {
    this.last = this.first = new Node(val);
    this.length = 1;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.length === 0) this.last = this.first = newNode;
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return null;
    const dequeuedNode = this.first;
    if (this.length === 1) this.last = this.first = null;
    else this.first = this.first.next;
    dequeuedNode.next = null;
    this.length--;
    return dequeuedNode;
  }
}

const queue = new Queue(11);
console.log(queue.enqueue(3));
console.log(queue.enqueue(23));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);