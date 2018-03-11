// Simular to a q, but not FIFO, it's last in last out.

class Stack {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.push(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

let a = new Stack;
a.add('a');
a.add('b');
a.add('c');
a.add('d');

console.log(a);

a.remove();
console.log(a);
console.log(a.peek());

module.exports = Stack;
