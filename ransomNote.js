// ransom note kata

function ransomNote(note, magazineText) {
  var noteArr = note.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};

  magazineArr.forEach(word => {
    if(!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  var noteIsPossible = true;

  noteArr.forEach(word => {
    if(magazineObj[word]) {
      magazineObj[word]--;
      if(magazineObj[word] < 0) noteIsPossible = false;
    }
    else
    noteIsPossible = false;
  });
  console.log(noteIsPossible);
}

var note = 'bring the money downtown'
var magazineText = 'the downtown is a cool place to visit but make sure that you bring money'

ransomNote(note, magazineText);

// function caesarCipher (str, num) {
//   num = num % 26;
//   var lowerCaseStr = str.toLowerCase();
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//   var newStr = ''
//
//   for(var i = 0; i < lowerCaseStr.length; i++) {
//     var currentLetter = lowerCaseStr[i];
//     if(currentLetter === ' ') {
//       newStr += currentLetter;
//       continue;
//     }
//     var currentIndex = alphabet.indexOf(currentLetter);
//     var newIndex = currentIndex + num;
//     if(newIndex > 25) newIndex = newIndex - 26;
//     if(newIndex < 0) newIndex =  26 + newIndex;
//     if(str[i] === str[i].toUpperCase()) {
//       newStr += alphabet[newIndex].toUpperCase();
//     }
//     else newStr += alphabet[newIndex];
//   }
//   return newStr
// }

// console.log(caesarCipher('Ybyk Ambcp gq y hytyqapgnr ugxypb', 2)) // Bqq Mggrgt
