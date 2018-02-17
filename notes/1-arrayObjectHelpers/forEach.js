// Using for loops sucks.

var colors = ['red', 'blue', 'green'];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}/// works, but it ain't great.

colors.forEach(function(color) {
  console.log(color);// very much like the #each method in ruby.
});

// Cool cool, let's do a better example.

// summing up an array of numbers
// Create an array of numbers
let numbers = [1,2,3,4,5]
// crate a varible to hold sum
let sum = 0;
// loop over the array incremtn sum variable
numbers.forEach(function(number) {
  sum += number;
});
// print some variable
console.log(sum);
