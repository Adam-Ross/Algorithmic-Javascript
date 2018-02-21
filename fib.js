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

console.log(fib(50));

// recursive solution.

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if(cache[args]) {
      return chache[args];
    }

    const result = fn.apply(this, args)
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return slowFib(n - 1) + slowFib(n - 2);
}

console.log(slowFib(10));
