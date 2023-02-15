class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new TreeNode(val);
    if (!this.root) { this.root = newNode; return this; }
    let curr = this.root;
    while (true) {
      if (val === curr.val) return null;
      if (val < curr.val) {
        if (!curr.left) { curr.left = newNode; return this; }
        curr = curr.left;
      } else {
        if (!curr.right) { curr.right = newNode; return this; }
        curr = curr.right;
      }
    }
  }

  remove(val) {
    if (!this.root) return false;
    if (val === this.root.val) { this.root = null; return true; }
    let curr = this.root;
    while (curr.left || curr.right) {
      if (val === curr.left.val) { curr.left = null; return true; }
      if (val === curr.right.val) { curr.right = null; return true; }
      if (val < curr.val) curr = curr.left;
      else curr = curr.right;
    }
    return false;
  }

  contains(val) {
    if (!this.root) return false;
    let curr = this.root;
    while (curr) {
      if (val === curr.val) return true;
      if (val < curr.val) curr = curr.left;
      else curr = curr.right;
    }
    return false;
  }

  BFS() {
    const queue = [this.root];
    const result = [];
    while (queue.length) {
      const node = queue.shift();
      result.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    return result;
  }
}

const tree = new BST();
tree.insert(47);
tree.insert(21);
tree.insert(76);
tree.insert(18);
tree.insert(52);
tree.insert(82);
tree.insert(27);
console.log(tree.BFS());