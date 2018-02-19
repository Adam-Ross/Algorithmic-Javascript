// find the number of vowels in given string.

function counter(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  str = str.toLowerCase().split('');

  for(let char of str) {
    if(vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
let str1 = 'ttt t t t t t'
let str2 = 'aEIoU'
console.log(counter(str1));
console.log(counter(str2));


// Regex solution.
function counter(str) {
  const matches = str.match(/[aeiou]/gi)
  // Match returns an array if matches found, null if no matches.  Need to handle that.
  return matches ? matches.length : 0;
}


console.log(counter(str1));
console.log(counter(str2));
