// Given a string, return the character that has the hightest number of repeats.
// Watch my tutorial 'bout it. https://www.youtube.com/watch?v=q32hP1x0jSY&feature=youtu.be

// function maxCharInString(str) {
//   const strObj = {};
//   let max = 0;
//   let maxChar = '';
//
//
//   for(let char of str){
//     if(strObj[char]) {
//       strObj[char]++;
//     } else {
//       strObj[char] = 1;
//     }
//   }
//
//   for(let char in strObj) {
//     if(strObj[char] > max) {
//       max = strObj[char];
//       maxChar = char;
//     }
//   }
//   console.log(maxChar);
// }

function maxChar(str) {
  const strObj = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) {
    if(strObj[char]) {
      strObj[char]++;
    } else {
      strObj[char] = 1;
    }
  }

  for(let char in strObj) {
    if(strObj[char] > max) {
      max = strObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}

var testCase = 'aaabbbcccfffffdddd' // should return 'f'
var testCase2 = 'aaabbbcccdddd' // should return 'd'

console.log(maxChar(testCase));
console.log(maxChar(testCase2));
