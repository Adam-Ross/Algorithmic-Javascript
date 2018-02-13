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

var note = 'bring the money downtown'
var magazineText = 'the downtown is a cool place to visit but make sure that you bring money'

ransomNote(note, magazineText);
