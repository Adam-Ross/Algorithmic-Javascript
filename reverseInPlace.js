// Reverse the elements in a given array - return the same array.

// function reverseArrayInPlace(arr) {
//   for(var i = 0; i < arr.length / 2; i++) {
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
//   }
//   return arr;
// }
//
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(reverseArrayInPlace(arr1));

// For loop solution -----------------------------

// function reverse(str) {
//   const strArr = str.split(' '); // Turn string into array.
//   for(var i = 0; i < strArr.length; i++){
//     var temp = strArr[i]; // Set up temp variable.
//     strArr[i] = strArr[strArr.length - 1 - i]; // Flip first and last.
//     strArr[strArr.length - 1 - i] = temp; // put last as first.
//   }
//   return strArr.join(' '); // join back the array to return a string.
// }
//
// str1 = 'reversed am I';
// console.log(reverse(str1));

// Array helper solution -----------------------------

function reverse(str) {
  str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

str1 = 'reversed am I';
console.log(reverse(str1));
