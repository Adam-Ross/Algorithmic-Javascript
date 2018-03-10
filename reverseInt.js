// Reverse an integer, making sure to keep the negative or positive sign.
// easier way
function reverseIntEasy(num) {
  const reversed = num.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(num);
}
let num = -1234
console.log(reverseIntEasy(num));

function reverseInt(num) {
  const reversedArr = [];
  let numArr = num.toString().split('');
  for(let i = numArr.length - 1; i >= 0; i--) {
    reversedArr.push(numArr[i]);
  }
  let reversed = reversedArr.join('');
  return parseInt(reversed) * Math.sign(num);
}

let number = -1234
console.log(reverseInt(number));



































// function intRev(num) {
//   const reversed = num.toString().split('').reverse().join('');
//   return parseInt(reversed) * Math.sign(num);
// }
//
// // console.log(intRev(12345));
// console.log(intRev(-12345));

// function reverseInt(num) {
//   const reverseNum = [];
//   let numArr = num.toString().split('');
//   for(let i = numArr.length - 1; i >= 0; i--) {
//     reverseNum.push(numArr[i]);
//   }
//   let numString = reverseNum.join('');
//   return parseInt(numString) * Math.sign(num);
// }
//
// let num = -1200;
// console.log(reverseInt(num));


// function reverseInt(num) {
//   const reverseArr = [];
//   let numArr = num.toString().split('');
//
//   for(let i = numArr.length - 1; i >= 0; i--) {
//     reverseArr.push(numArr[i]);
//   }
//   let numString = reverseArr.join('');
//   return parseInt(numString) * Math.sign(num);
// }
//
// let number = 1234;
// console.log(reverseInt(number));

// function reverseInt(num) {
//   const reversed = num.toString().split('').reverse().join('');
//
//   return parseInt(reversed) * Math.sign(num);
// }
// let number = -1234;
// console.log(reverseInt(number));
