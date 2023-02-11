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
c.right = f;

const sumTree = root => {
  const stack = [root];
  let sum = 0;
  while (stack.length > 0) {
    const curr = stack.pop();
    sum += curr.val;
    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
  }
  return sum;
};
const recursiveSumTree = (root) => {
  if (!root) return 0;
  return root.val + recursiveSumTree(root.left) + recursiveSumTree(root.right);
};

console.log(sumTree(a));
console.log(recursiveSumTree(a));