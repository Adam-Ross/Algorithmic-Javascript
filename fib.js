// Do the fib.
//
function fib(n) {
  const arr = [0,1];
  const mapper = {};
  let count = 0;
  for(let i = 2; i <= n; i++) {
    let a = arr[i - 1];
    let b = arr[i - 2];
    arr.push(a + b);
  }

  for(let elem in arr) {
    mapper[count] = arr[elem];
    count++;
  }
  return mapper;
}

console.log(fib(10));

// recursive solution.

function fibr(n) {
  if (n < 2) {
    return n;
  }
  return fibr(n - 1) + fibr(n - 2);
}

console.log(fibr(10));
