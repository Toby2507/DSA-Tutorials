class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    const newNode = new Node(val);
    this.tail = this.head = newNode;
    this.length = 1;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    const poppedNode = this.tail;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return null;
    const shiftedNode = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = this.head.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let curr = this.head;
    if (idx < this.length / 2) for (let i = 0; i < idx; i++) curr = curr.next;
    else {
      curr = this.tail;
      for (let i = this.length - 1; i > idx; i--) curr = curr.prev;
    }
    return curr;
  }

  set(idx, val) {
    const curr = this.get(idx);
    if (curr) { curr.val = val; return true; }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    const newNode = new Node(val);
    const prev = this.get(idx - 1);
    const curr = prev.next;
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = curr;
    curr.prev = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const curr = this.get(idx);
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
    curr.prev = curr.next = null;
    this.length--;
    return curr;
  }

  reverse() {
    if (this.length <= 1) return;
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;
    while (curr) {
      let temp = curr.next;
      curr.next = curr.prev;
      curr.prev = temp;
      curr = temp;
    }
    return;
  }

  print() {
    let curr = this.head;
    let listVals = "";
    while (curr) {
      listVals += `${curr.val} -> `;
      curr = curr.next;
    }
    return listVals;
  }
}

const list = new DoublyLinkedList(0);
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(4));
// console.log(list.unshift(1));
// console.log(list.pop());
// console.log(list.insert(3, 10));
// console.log(list.remove(1));
// console.log(list.remove(1));
// console.log(list.shift());
// console.log(list.set(2, 4));
list.reverse();
console.log(list);
console.log(list.print());