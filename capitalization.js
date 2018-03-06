// Capitalize every word in a given string.

// better way to do it.
function capAll(str) {
  str = str.split(' ');
  let result = [];

  for(let word of str) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(' ');
}

function cap(str) {
  let result = str[0].toUpperCase();

  for(let i = 1; i < str.length; i++) {
    if(str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

let sentence = 'This is a string and every word should be capitalized. Thanks, man.'
console.log(capAll(sentence));
console.log(cap(sentence));


































// function capAll(str) {
//   let result = [];
//
//   str = str.split(' ');
//
//   for(let word of str) {
//     result.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return result.join(' ');
// }
// let str = 'This is a string, and every word should be capitalized.'
// console.log(capAll(str));






// Alternate way of solving.
// function cap(str) {
//   let result = str[0].toUpperCase();
//
//   for(let i = 1; i < str.length; i++) {
//     if(str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(cap('This is the string.'));
