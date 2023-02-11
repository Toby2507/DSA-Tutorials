class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.print();
  }

  pop() {
    if (this.length === 0) return null;
    let curr = this.head;
    let prev = this.head;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) this.head = this.tail = null;
    return curr;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.print();
  }

  shift() {
    if (!this.head) return null;
    const prevHead = this.head;
    this.head = this.head.next;
    prevHead.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return prevHead;
  }

  get(idx) {
    if (idx >= this.length || idx < 0) return null;
    let curr = this.head;
    for (let i = 0; i < idx; i++) curr = curr.next;
    return curr;
  }

  set(idx, val) {
    let curr = this.get(idx);
    if (curr) { curr.val = val; return true; };
    return false;
  }

  insert(val, idx) {
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    if (idx < 0 || idx > this.length) return false;
    const newNode = new Node(val);
    let prev = this.get(idx - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    if (idx < 0 || idx >= this.length) return null;
    const prev = this.get(idx - 1);
    const curr = prev.next;
    prev.next = curr.next;
    curr.next = null;
    this.length--;
    return curr;
  }

  reverse() {
    if (this.length <= 1) return this.head;
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;
    let prev = null;
    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return this;
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

const list = new LinkedList(4);
console.log(list.unshift(5));
console.log(list.push(6));
console.log(list.print());
console.log(list.set(1, 1));
console.log(list.print());
console.log(list.insert(10, 2));
console.log(list.print());
console.log(list.reverse());
console.log(list.print());