// Just some random bullshit...


function guessCountForNumber(number) {
  let j;
  let i;
  let count = 0;
  do {
    i = Math.random() * 1000
    j = Math.floor(i)
    count++;
  }
  while (j != number);
  return count;
}

console.log(guessCountForNumber(600));
