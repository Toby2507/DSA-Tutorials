class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// const depthFirstPrint = root => {
//   const stack = [root];
//   const result = [];
//   while (stack.length > 0) {
//     const curr = stack.pop();
//     result.push(curr.val);
//     curr.right && stack.push(curr.right);
//     curr.left && stack.push(curr.left);
//   }
//   return result;
// };
const depthFirstPrint = (root) => {
  if (!root) return [];
  return [root.val, ...depthFirstPrint(root.left), ...depthFirstPrint(root.right)];
};

console.log(depthFirstPrint(a));

// pre-order traversal
const preOrder = (root) => {
  if (!root) return [];
  return [root.val, ...preOrder(root.left), ...preOrder(root.right)];
};
console.log(preOrder(a));

// post-order traversal
const postOrder = (root) => {
  if (!root) return [];
  return [...postOrder(root.left), ...postOrder(root.right), root.val];
};
console.log(postOrder(a));

// in-order traversal
const inOrder = (root) => {
  if (!root) return [];
  return [...inOrder(root.left), root.val, ...inOrder(root.right)];
};
console.log(inOrder(a));