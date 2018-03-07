// build a pyramid with (n) levels.

// for n = 3:
// ---#---
// --###--
// -#####-

// for n = 4:
// ---#---
// --###--
// -#####-
// #######

// for n = 5:
// ---#---
// --###--
// -#####-
// #######
//#########

// And so on...

function pyramid(n) {
  const midPoint = Math.floor((n * 2 - 1) / 2);

  for(row = 0; row < n; row++) {
    let level = ''; // Start level as an empty string that you can add to.

    for(col = 0; col < n * 2 - 1; col++) {
      if(midPoint - row <= col && midPoint + row >= col) {
        level += '#';
      } else {
        level += '-';
      }
    }
    console.log(level);
  }
}

pyramid(70);

// pretty cool. Just watch again, walk through the code, and see why the midpoint is so important. Cheers.
