// Anagrams - same number and quantity of characters between two given strings.

function anagrams(stringA, stringB) {

  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // compare keys
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  // Clean up string of punctuation and spaces.
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}



function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
// Helper method.
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// console.log(anagrams('the', 't H e!'));
console.log(anagrams('The!', 'th e!!!'));
