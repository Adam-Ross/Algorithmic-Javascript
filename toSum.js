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

function twoSum(numArr, sum) {
  let pairs = [];
  let hashTable = [];

  for(let i = 0; i < numArr.length; i++) {
    let currNum = numArr[i];
    let counterPart = sum - currNum;
    if(hashTable.indexOf(counterPart) !== -1) {
      pairs.push([currNum, counterPart]);
    }
    hashTable.push(currNum);
  }
  return pairs;
}

const arr = [1,2,3,4,5,6,7,8,9];
const num = 10;

console.log(twoSum(arr, num));

// let arr = [[1,2], [2,1], [3,4]];
// arr.forEach(function (elem) {
//   return elem.sort()
// });
//
// console.log(arr);
// console.log(arr.uniq)
