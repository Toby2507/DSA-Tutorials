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

  sumAll() {
    return this.#sumAll(this.head);
  }
  #sumAll(curr) {
    if (!curr) return 0;
    return curr.val + this.#sumAll(curr.next);
  }

  print() {
    return this.#print(this.head);
  }
  #print(curr) {
    if (!curr) return "";
    return `${curr.val} -> ${this.#print(curr.next)}`;
  }
}

// O(n) time, O(1) space
const deleteValue = (head, val) => {
  let curr = head;
  let prev;
  if (head.val === val) return head.next;
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    }
    prev = curr;
    curr = curr.next;
  }
  return head;
};

// O(n) time, O(n) space
const recursiveDeletion = (head, val) => {
  if (head.val === val) return head.next;
  _recursiveDeletion(head, val);
  return head;
};
const _recursiveDeletion = (curr, val, prev = null) => {
  if (!curr) return;
  if (curr.val === val) { prev.next = curr.next; return; }
  _recursiveDeletion(curr.next, val, curr);
};

const print = (curr) => {
  if (!curr) return "";
  return `${curr.val} -> ${print(curr.next)}`;
};

const list = new LinkedList();
list.append(11);
list.append(7);
list.append(10);
list.append(2);


const iterativeDeleteHead = deleteValue(list.head, 10);
console.log(print(iterativeDeleteHead));
const recursiveDeleteHead = recursiveDeletion(list.head, 2);
console.log(print(recursiveDeleteHead));