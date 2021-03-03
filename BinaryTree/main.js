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
    //if tree empty add root equal node
    if (this.root === null) {
      this.root = node;
    } else {
      //else call insert node function
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    //if data of node less than root data
    if (node.data < root.data) {
      if (root.left === null) {
        root.left = node;
        return;
      } else {
        //call recursion
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
        return;
      } else {
        //call recursion
        this.insertNode(root.right, node);
      }
    }
  }
  //Traverse all node left -> node -> right
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  //Get root node
  getRoot() {
    return this.root;
  }
  //remove a node
  removeNode(node, data) {
    //if data less than current node data (start with root node)
    if (data < node.data) {
      //call recursion for node.left
      node.left = this.removeNode(node.left, data);
      //return node to get new tree
      return node;
    } else if (data > node.data) {
      //call recursion for node.right
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      //found node to delete
      if (node.right === null && node.left === null) {
        //if remove node dont have children pointer that node to null
        node = null;
        return node;
      } else if (node.left === null) {
        //if remove node have right child pointer that node to right child
        node = node.right;
        return node;
      } else if (node.right === null) {
        //if remove node have left child pointer that node to left child
        node = node.left;
        return node;
      } else {
        //if node have two child find the min node of sub right tree
        let temp = this.findMinNode(node.right);
        //node data now equal min node data
        node.data = temp.data;
        //call recursion for node.right to remove min node (because it replace to remove node)
        node.right = this.removeNode(node.right, temp.data);
        return node;
      }
    }
  }
  findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}

function main() {
  let tree = new BinaryTree();
  let arr = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27];
  for (const element of arr) {
    tree.insert(element);
  }
  let node = tree.getRoot();
  tree.inorder(node);
  node = tree.removeNode(node, 25);
  console.log("tree after remove node 4");
  tree.inorder(node);
}
main();
