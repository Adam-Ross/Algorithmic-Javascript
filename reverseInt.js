// Reverse an integer, making sure to keep the negative or positive sign.

function intRev(num) {
  const reversed = num.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(num);
}

console.log(intRev(12345));
console.log(intRev(-12345));
