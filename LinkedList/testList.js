class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    if (!this.head) { this.head = new ListNode(val); return; }
    this.#append(this.head, val);
  }
  #append(curr, val) {
    if (!curr.next) { curr.next = new ListNode(val); return; }
    this.#append(curr.next, val);
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
list.append(2);
list.append(4);
list.append(3);

const list2 = new LinkedList();
list2.append(5);
list2.append(6);
list2.append(4);


var addTwoNumbers = function (l1, l2) {
  const reversedL1 = reverseList(l1);
  const reversedL2 = reverseList(l2);
  console.log(reversedL1, reversedL2);
  const summedList = sumList(reversedL1, reversedL2);
  const finalList = digitizeList(summedList);
  console.log(finalList);
  return createList(finalList);
};

const reverseList = (curr, prev = null) => {
  if (!curr) return prev;
  const temp = curr.next;
  curr.next = prev;
  return reverseList(temp, curr);
};

const sumList = (head1, head2, list = []) => {
  if (!head1 && !head2) return list;
  const [l1, l2] = [head1?.val || 0, head2?.val || 0];
  list.push(l1 + l2);
  const newHead1 = head1?.next || null;
  const newHead2 = head2?.next || null;
  return sumList(newHead1, newHead2, list);
};

const digitizeList = arr => {
  let initialArr = [...arr];
  const finalArr = [];
  let i = 0;
  while (i < initialArr.length) {
    const item = String(initialArr[i]);
    if (item.length === 1) {
      finalArr.push(+item);
    } else {
      const lastNumber = item.slice(-1);
      const numberTrail = item.slice(0, -1);
      finalArr.push(+lastNumber);
      if (i === initialArr.length - 1) {
        initialArr.push(+numberTrail);
      } else {
        initialArr[i + 1] = initialArr[i + 1] + (+numberTrail);
      }
    }
    i++;
  }
  return finalArr;
};


const digitizeList2 = (arr, idx = 0, list = []) => {
  if (idx === arr.length) return list;
  const curr = arr[idx];
  if (curr > 10) {
    list.push(curr % 10);
    arr[idx + 1] = (arr[idx + 1] || 0) + Math.floor(curr / 10);
  } else { list.push(curr); }
  return digitizeList2(arr, idx + 1, list);
};

const createList = (arr, i = 0) => {
  if (i === arr.length) return null;
  return new ListNode(arr[i], createList(arr, i + 1));
};

console.log(digitizeList2([2, 5, 4, 7, 19]));

console.log(addTwoNumbers(list.head, list2.head));