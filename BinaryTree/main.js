class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.data < root.data) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  getRoot() {
    return this.root;
  }
}

function main() {
  let tree = new BinaryTree();
  let arr = [24, 4, 13, 6, 76, 43, 9, 1];
  for (const element of arr) {
    tree.insert(element);
  }
  const node = tree.getRoot();
  tree.inorder(node);
}
main();
