class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  //if head not pass head = null
  constructor(head = null) {
    this.head = head;
  }
  //get lenght of linklist
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  clear() {
    this.head = null;
  }
  getHead() {
    return this.head.data;
  }
  getTail() {
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node.data;
      }
      node = node.next;
    }
    return null;
  }
  getNodeAtPosition(pos) {
    let count = 0;
    let node = this.head;
    while (count !== pos - 1) {
      count++;
      node = node.next;
    }
    if (node) {
      return node.data;
    }
    return null;
  }
  printNode() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
function reverseLinkedList(list) {
  let temp = new LinkedList();
  temp = list;
  let prev = null;
  let next = null;
  let curr = temp.head;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  temp.head = prev;
  return temp;
}
function main() {
  let node1 = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  let LinkList = new LinkedList(node1);
  console.log("size of list", LinkList.size());
  console.log("head data is", LinkList.getHead());
  console.log("tail data is", LinkList.getTail());
  console.log("data at positon 3 is", LinkList.getNodeAtPosition(3));
  LinkList.printNode();
  console.log("list after reverse");
  reverseLinkedList(LinkList).printNode();
}
main();
