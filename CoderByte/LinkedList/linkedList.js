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
    let curr = this.head;
    while (curr.next) { curr = curr.next; }
    curr.next = new Node(val);
  }

  contains(val) {
    let curr = this.head;
    while (curr) {
      if (curr.val === val) return true;
      curr = curr.next;
    }
    return false;
  }

  print() {
    let curr = this.head;
    let str = '';
    while (curr) { str += `${curr.val} -> `; curr = curr.next; }
    return str;
  }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
list.append("d");

console.log(list.contains("c"));

console.log(list.print());