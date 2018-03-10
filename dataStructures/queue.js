// Making a queue from scratch.
// way of organizing info or data, with optimal runtime complexity
// for accessing or removing data.

// Always think first, what data struture to use that has good runtime.
// Q is waiting in line a ticketing counter, no skipping.  Order in is order out.
// first in first out principal.

class Queue {

  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

let tester = new Queue;
tester.add('This is something.');
tester.add('This is something else.');
tester.remove();
console.log(tester);
