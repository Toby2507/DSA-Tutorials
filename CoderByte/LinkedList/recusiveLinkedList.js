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
const iterativeSumList = (head) => {
  let curr = head;
  let sum = 0;
  while (curr) {
    sum += curr.val;
    curr = curr.next;
  }
  return sum;
};

// O(n) time, O(n) space
const sumList = (head) => {
  if (!head) return 0;
  return head.val + sumList(head.next);
};

const sumListTest = (head1, head2, list = []) => {
  if (!head1 && !head2) return list;
  const [l1, l2] = [head1?.val || 0, head2?.val || 0];
  list.push(l1 + l2);
  const new1 = head1?.next || null;
  const new2 = head2?.next || null;
  return sumListTest(new1, new2, list);
};

const list = new LinkedList();
list.append(11);
list.append(7);
list.append(10);
list.append(2);

const list2 = new LinkedList();
list2.append(5);
list2.append(2);
list2.append(8);
list2.append(9);

const undigitList = sumListTest(list.head, list2.head);
console.log(undigitList);
const digitizeList = (arr) => {
  let initialArr = [...arr];
  const finalArr = [];
  let i = 0;
  while (i < initialArr.length) {
    const item = String(initialArr[i]);
    if (item.length === 1) { finalArr.push(+item); } else {
      const lastNumber = item.slice(-1);
      const trail = item.slice(0, -1);
      finalArr.push(+lastNumber);
      if (i === initialArr.length - 1) { initialArr.push(+trail); } else {
        initialArr[i + 1] = initialArr[i + 1] + +trail;
      }
    }
    i++;
  }

  return finalArr;
};
console.log(digitizeList([200, 4, 12, 200]));


console.log(sumList(list.head));
console.log(iterativeSumList(list.head));
console.log(list.sumAll());
console.log(list.contains("c"));
console.log(list.print());