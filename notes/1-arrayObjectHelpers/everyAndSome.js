// Every returns true if every single object or element passes a test
// some returns true if even one returns true.

let computers = [
  { name: 'apple', ram: 24 },
  { name: 'acer', ram: 16 },
  { name: 'compaq', ram: 4 },
  { name: 'dell', ram: 8 }
]

let allComputersCapable = computers.every(computer => {
  return computer.ram > 16;
});

let someComputersCapable = computers.some(computer => {
  return computer.ram > 16;
})

console.log(allComputersCapable);
console.log(someComputersCapable);
