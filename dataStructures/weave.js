const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const result = new Queue;

  while(sourceOne.peek() || sourceTwo.peek()) {
    if(sourceOne.peek()) {
      result.add(sourceOne.remove());
    }
    if(sourceTwo.peek()) {
      result.add(sourceTwo.remove());
    }
  }
  return result;
}

let one = new Queue;
let two = new Queue;

one.add('1');
one.add('2');
one.add('3');
one.add('4');

two.add('a');
two.add('b');
two.add('c');
two.add('d');
two.add('e');

console.log(weave(one, two));
