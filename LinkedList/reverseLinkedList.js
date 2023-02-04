class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    if (!this.head) { this.head = new Node(val); return; }
    this.#append(this.head, val);
  }
  #append(curr, val) {
    if (!curr.next) { curr.next = new Node(val); return; }
    this.#append(curr.next, val);
  }

  contains(val) {
    return this.#contains(val, this.head);
  }
  #contains(val, curr) {
    if (!curr) return false;
    if (curr.val === val) return true;
    return this.#contains(val, curr.next);
  }

  // reverse() {
  //   let curr = this.head;
  //   let prev = null;
  //   while (curr) {
  //     let temp = curr.next
  //     curr.next = prev;
  //     prev = curr
  //     curr = temp
  //   }
  //   this.head = prev;
  // }

  reverse() {
    const newHead = this.#reverse(this.head);
    this.head = newHead;
  }
  #reverse(curr, prev = null) {
    if (!curr) return prev;
    const temp = curr.next;
    curr.next = prev;
    return this.#reverse(temp, curr);
  }

  print() {
    return this.#print(this.head);
  }
  #print(curr) {
    if (!curr) return "";
    return `${curr.val} -> ${this.#print(curr.next)}`;
  }
}

const list = new LinkedList();
list.append(11);
list.append(7);
list.append(10);
list.append(2);

console.log(list.print());
list.reverse();
console.log(list.print());