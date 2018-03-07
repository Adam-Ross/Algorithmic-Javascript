// Check if a given word is a palindrome.

//easy way
function isPal(str) {
  return str === str.split('').reverse().join('');
}

// alternate approach
function isPal(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

console.log(isPal('aabbccccbbaa')); // true
console.log(isPal('a abbccccbba a')); // true
console.log(isPal('abbccccbbaa')); // false
console.log(isPal('abbcccbbaa')); // false
// Given a string, write a function that will return a string with every individual word reversed.

function reverseWords(str) {
  let wordsArr = str.split(' ');
  let reversedWordsArr = [];

  wordsArr.forEach(word => {
    let reversedWord = '';
    for(var i = word.length-1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });
  return reversedWordsArr.join(' ');
}
console.log(reverseWords('This should be reversed'));
