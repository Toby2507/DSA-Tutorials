class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode(3);
const b = new TreeNode(2);
const c = new TreeNode(7);
const d = new TreeNode(4);
const e = new TreeNode(-2);
const f = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

const breadthFirstPrint = (root) => {
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const curr = queue.shift();
    result.push(curr.val);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return result;
};
// const bfs = (root, target) => {
//   const queue = [root];
//   while (queue.length > 0) {
//     const curr = queue.shift();
//     if (curr.val === target) return true;
//     if (curr.left) queue.push(curr.left);
//     if (curr.right) queue.push(curr.right);
//   }
//   return false;
// };
const sumTree = root => {
  const queue = [root];
  let final = 0;
  while (queue.length > 0) {
    const curr = queue.shift();
    final += curr.val;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return final;
};

// console.log(bfs(a, "e"));
// console.log(bfs(a, "g"));
console.log(sumTree(a));
console.log(breadthFirstPrint(a));