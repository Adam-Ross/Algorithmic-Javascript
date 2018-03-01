// Given a string, write a function that will return a string with every individual word reversed.

function reverseWords(str) {
  var wordsArr = str.split(' ');
  var reversedWordsArr = [];

  wordsArr.forEach(word => {
    var reversedWord = '';
    for(var i = word.length-1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });
  return reversedWordsArr.join(' ');
}



console.log(reverseWords('This should be reversed'));
