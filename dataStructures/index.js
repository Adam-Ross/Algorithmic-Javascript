// Node and linked lists ---

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constrctor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
}

module.exports = { Node, LinkedList };

list = new LinkedList;
list.insertFirst('The head.');
list.insertFirst('1 New head.');
list.insertFirst('2 New head.');
list.insertFirst('3 New head.');
list.insertFirst('4 New head.');
console.log(list.size());
