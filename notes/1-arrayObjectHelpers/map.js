// Really widely used, man - so, better know it.
// Returns in new array, member that.

let numbers = [1,2,3];
let doubled = [];

// using a for loop.

for(var i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log(doubled);

// now, using map.

numbers.map(number => {
  return number * 2;
});
