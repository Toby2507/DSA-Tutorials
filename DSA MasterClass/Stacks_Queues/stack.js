class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(top) {
    this.top = new Node(top);
    this.height = 1;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.top) this.top = newNode;
    else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.height++;
    return this;
  }

  pop() {
    if (this.height === 0) return null;
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.height--;
    return temp;
  }
}

const stack = new Stack(11);
console.log(stack.push(10));
console.log(stack.push(9));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);