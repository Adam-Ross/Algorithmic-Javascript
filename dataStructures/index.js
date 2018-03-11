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

  getFirst() {
    if(this.head) {
      return this.head.data;
    }
    return 'There is no head present - might try running the insert first method.'
  }

  getLast() {
    if(!this.head) {
      return 'There is currently no head.'
    }
    if(!this.head.next) {
      return 'The head is the only node.';
    }
    let previous = this.head;
    let node = this.head.next;

    while(node.next) {
      previous = node;
      node = node.next;
    }
    return node;
  }


}

module.exports = { Node, LinkedList };

list = new LinkedList;
list2 = new LinkedList;
list.insertFirst('data');
list.insertFirst('data1', this.head);
list.insertFirst('data2', this.head);
list.insertFirst('data3', this.head);
list.insertFirst('data4', this.head);

console.log(list.getLast());
