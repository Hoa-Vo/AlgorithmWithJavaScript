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
}

function main() {
  let node1 = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  node1.next = node2;
  node2.next = node3;
  let LinkList = new LinkedList(node1);
  console.log("size of list", LinkList.size());
}
main();
