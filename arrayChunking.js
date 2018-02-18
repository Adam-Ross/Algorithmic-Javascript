// Given an array, chunk by size into sub arrays.
let arr = [1,2,3,4,5,6,7,8,9,10, 'a', 'b', 'abc'];
let number = 2;
// Should return a subset of array with *number number of elements in each one

// function chunk(arr, size) {
//   const chunked = [];
//
//   for (let element of arr) {
//     const last = chunked[chunked.length -1];
//
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }
//
// console.log(chunk(arr, number));


function chunk(arr, size) {
  const chunked = [];

  for (let element of arr) {
    let last = chunked[chunked.length -1];
    if(!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

// console.log(chunk(arr, number));

function chunk2(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length){
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

console.log(chunk2(arr, number));
