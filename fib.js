// Do the fibonacci algorithm
// iterative solution
//
// function fibIt(num) {
//   const arr = [0, 1];
//   const mapper = {};
//   let counter = 0;
//
//
//   for(let i = 2; i <= num; i++) {
//     let a = arr[i - 1];
//     let b = arr[i - 2];
//     arr.push(a + b);
//   }
//
//   for(let elem in arr) {
//     mapper[counter] = arr[elem];
//     counter++;
//   }
//   return mapper;
// }
//
// console.log(fibIt(10));

// recursive solution
// function fibRec(10) {
//   if(n < 2) {
//     return n;
//   }
//   return (fibRec(n - 1) + fibRec(n - 2));
// }



function factorial(n) {
  if(n < 2) {
    return n;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

































// function fib(n) {
//   const arr = [0,1];
//   const mapper = {};
//   let counter = 0;
//
//   for(let i = 2; i <= n; i++) {
//     let a = arr[i - 1];
//     let b = arr[i - 2];
//     arr.push(a + b);
//   }
//
//   for(let elem in arr) {
//     mapper[counter] = arr[elem];
//     counter++;
//   }
//   return mapper;
// }
//
// console.log(fib(10));

// recursive solution

// function fib(n) {
//   if(n < 2) {
//     return n
//   }
//   return fib(n - 1) + fib(n - 2);
// }
//
// console.log(fib(10));


// function fib(n) {
//   const arr = [0,1];
//   const mapper = {};
//   let count = 0;
//   for(let i = 2; i <= n; i++) {
//     let a = arr[i - 1];
//     let b = arr[i - 2];
//     arr.push(a + b);
//   }
//
//   for(let elem in arr) {
//     mapper[count] = arr[elem];
//     count++;
//   }
//   return mapper;
// }
//
// console.log(fib(110));




// recursive solution.

// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     if(cache[args]) {
//       return chache[args];
//     }
//
//     const result = fn.apply(this, args)
//     cache[args] = result;
//
//     return result;
//   };
// }

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return slowFib(n - 1) + slowFib(n - 2);
// }
//
// console.log(slowFib(10));
