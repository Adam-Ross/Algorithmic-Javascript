// Given a string, return the character that has the hightest number of repeats.

function maxCharInString(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  console.log(maxChar);
}


var testCase = 'aaabbbcccfffffdddd' // should return 'f'
var testCase2 = 'aaabbbcccdddd' // should return 'd'
maxCharInString(testCase);
maxCharInString(testCase2);
