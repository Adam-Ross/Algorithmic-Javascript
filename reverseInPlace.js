// Reverse the elements in a given array - return the same array.

function reverseArrayInPlace(arr) {
  for(var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseArrayInPlace(arr1));
