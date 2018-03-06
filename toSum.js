// write a function that returns all possible combinations of elements within
// a givin array that add up to given n.

// given array: [1,2,3,4,5,6,7,8,9]
// given number: 10
// should return: [ [ 6, 4 ], [ 7, 3 ], [ 8, 2 ], [ 9, 1 ] ]

function sums(arr, sum) {
  let pairs = [];
  let numList = [];

  for(let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let diff = sum - currNum;
    if(numList.includes(diff)) {
      pairs.push([currNum, diff]);
    }
    numList.push(currNum);
  }
  return pairs;
}

let num = 10;
let arr = [1,2,3,4,5,6,7,8,9];

console.log(sums(arr, num));
























// function twoSum(numArr, sum) {
//   let pairs = [];
//   let numList = [];
//
//   for(let i = 0; i < numArr.length; i++) {
//     let currNum = numArr[i];
//     let diff = sum - currNum;
//
//     if(numList.includes(diff)) {
//       pairs.push([currNum, diff]);
//     }
//     numList.push(currNum);
//   }
//   return pairs;
// }
//
// let arr = [1,2,3,4,5,6,7,8,9];
// let num = 10;
//
// console.log(twoSum(arr, num));



























// function twoSum(numArr, sum) {
//   let pairs = [];
//   let numList = [];
//
//   for(let num of numArr) {
//     let currNum = numArr[num];
//     let difference = sum - currNum;
//     if(numList.includes(difference)) {
//       pairs.push([currNum, difference]);
//     }
//     numList.push(currNum);
//   }
//   return numList;
// }
