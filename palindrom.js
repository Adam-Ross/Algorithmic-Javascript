// --- Directions
// Given a string, return tru if the string is a plaindrom or false
// if it is not.  Palindroms are string that form the same word if it is reversed.
// Must include spaces and punctuation in determining if the stiring is a palindrome.

// Simple solution - doesn't take into account punctuation or spacing.

function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// console.log(palindrome('acba')); // false
// console.log(palindrome('abba')); // true

// Bit more nuanced (((spelled that wrong))) using the every function on the array prototype

// function palindrome(str) {
//   return str.split('').every((char, i) => { // turn string into array
//     return char === str[str.length - 1 - i]; // will return a boolean for every calulation - if one boolean returns false, entire is false.
//   });
// }

console.log(palindrome('acba')); // false
console.log(palindrome('abba')); // true
