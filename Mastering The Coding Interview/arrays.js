// Lookup Time: O(1)
// Push Time: O(1)
// Pop Time: O(1)
// Unshift Time: O(n)
// Shift Time: O(n)
// Splice Time: O(n)
// Insert Time: O(n)
// Delete Time: O(n)

const strings = ['a', 'b', 'c', 'd'];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(idx) {
    return this.data[idx];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const popped = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return popped;
  }

  delete(idx) {
    const item = this.data[idx];
    this.shiftItems(idx);
    return item;
  }

  shiftItems(idx) {
    for (let i = idx; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new MyArray();
console.log(arr.push("Ade"));
console.log(arr.push("Wale"));
console.log(arr.push("Ike"));
console.log(arr.push("Tolu"));
console.log(arr.delete(2));
console.log(arr);