// find the number of vowels in given string.

function vowelCounter(str) {
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  str = str.toLowerCase().split('');

  for(let char of str) {
    if(vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
}
let str = 'aeiou Ajjjj'
console.log(vowelCounter(str));


// Regex solution.
function counter(str) {
  const matches = str.match(/[aeiou]/gi)
  // Match returns an array if matches found, null if no matches.  Need to handle that.
  return matches ? matches.length : 0;
}
