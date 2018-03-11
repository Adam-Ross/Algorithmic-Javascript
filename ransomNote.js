// ransom note kata
// If you're looking at this - watch the video of the making of it. link below.
// https://www.youtube.com/watch?v=FavD-Js4SSg

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

let note = 'I want the money'
let magazineText = 'Do you want money and fame?  For sure you do!  I can say from my years in the INFOtainment business, there is no quicker way to get it than spreading MISINFO - I mean, like, big leauge!'

ransomNote(note, magazineText);
