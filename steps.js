// Steps.  Given n, print out that many # symbols.

// given 3
// expect '#  '
//        '## '
//        '###'


// iterative
function steps(n) {
  for(let row = 0; row < n; row++) {
    let stair = '';

    for(let col = 0; col < n; col++) {
      if(col <= row) {
        stair += '#';
      } else {
        stair += '';
      }
    }
    console.log(stair);
  }
}

steps(25);

// recursive

function step(n, row = 0, stair = '') {
  if(n === row) {
    return;
  }

  if(n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if(stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

step(10);
