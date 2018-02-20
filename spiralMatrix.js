// Spiral matrix -- Shit is a bit confusing.

function matrix(n) {
  const results = [];
  for(let i = 0; i < n; i++) {
    results.push([]);
  }

  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  let counter= 1;
  while (startCol <= endCol && startRow <= endRow) {
    for(let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }

    startRow++;
    // right col
    for(let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    // decrement endCol;
    endCol--;

    for(let i = endCol; i >= startCol; i--) {
      console.log(`current counter: ${counter}`);
      results[endRow][i] = counter;
      counter++;
    }

    endRow--;

    for(let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  console.log(results);
}
matrix(5);
// console.log(matrix(3));
