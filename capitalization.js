// Capitalize every word in a given string.

let word = 'word word word'

function capitalize(str) {
  let newStr = [];
  str = str.split(' ');

  for(let word of str) {
    newStr.push(word[0].toUpperCase() + word.slice(1));
  }
  return newStr.join(' ');
}

console.log(capitalize(word));

function cap(str) {
  let arr = str.split(' ');
  let newStr = [];
  for(let word of arr) {
    newStr.push(word[0].toUpperCase() + word.slice(1))
  }
  return newStr.join(' ');
}

console.log(cap('this is the string. and thank you about it.'));

// Alternate way of solving.

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

console.log(cap('This is the string.'));
