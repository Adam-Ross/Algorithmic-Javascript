// Do the fib.

function fib(n) {
  const arr = [1,2];
  const mapper = {};
  let count = 1;
  for(let i = 2; i < n; i++) {
    let a = arr[i - 1];
    let b = arr[i - 2];
    arr.push(a + b);
  }

  console.log(arr);
  for(let elem in arr) {
    mapper[count] = arr[elem];
    count++;
  }
  return mapper;
}

console.log(fib(1000));
