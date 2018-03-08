// Given an array, chunk by size into sub arrays.
let arr = [1,2,3,4,5,6,7,8,9,10,'abc', 'd', 'e f g'];
let number = 2;
// Should return a subset of array with *number number of elements in each one
// [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [11] ]


function chunk(arr, num) {
  const chunked = [];
  for(let elem of arr) {
    let last = chunked[chunked.length - 1];
    if(!last || last.length === num) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunked;
}

console.log(chunk(arr, number));


























// function chunk(arr, num) {
//   const chunked = [];
//   for(let elem of arr) {
//     let last = chunked[chunked.length - 1];
//     if(!last || last.length === num) {
//       chunked.push([elem]);
//     } else
//       last.push(elem);
//   }
//   return chunked;
// }
//
// console.log(chunk(arr, number));

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

// console.log(chunk(arr, number));


// function chunk(arr, size) {
//   const chunked = [];
//
//   for (let element of arr) {
//     let last = chunked[chunked.length -1];
//     if(!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// function chunked(arr, size) {
//   const chunk = [];
//
//   for(let elem of arr) {
//     let last = chunk[chunk.length - 1];
//     if(!last || last.length === size) {
//       chunk.push([elem]);
//     } else {
//       last.push(elem);
//     }
//   }
//   return chunk;
// }
//
// console.log(chunked(arr, number));

// function chunk2(array, size) {
//   const chunked = [];
//   let index = 0;
//
//   while (index < array.length){
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }
//   return chunked;
// }
//
// console.log(chunk2(arr, number));
