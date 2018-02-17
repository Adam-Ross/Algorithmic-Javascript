// // Make a data structure with some stuff in it.

let persons = [
  { name: 'John Smith', password: 'abcd', clear: true },
  { name: 'Jane Smith', password: 'abcde', clear: false },
  { name: 'John Doe', password: 'abcdef', clear: false },
  { name: 'Jane Doe', password: 'abcdefg', clear: true }
];
// using for loop.
let clearUsers = [];
for(let i = 0; i < persons.length; i++) {
  if (persons[i].clear)
  clearUsers.push(persons[i].name)
};
console.log(clearUsers);
// // Using filter

let clear_users = persons.filter(person => {
  return person.clear;
})

console.log(clear_users);

// That example sucks.  Do something easier - lets say we wanted to filter by type
// that is, make a subset of a type from a given array.

let products = [
  { name: 'banana', type: 'vegtable', quantity: 3, price: 10 },
  { name: 'kale', type: 'vegtable', quantity: 4, price: 11 },
  { name: 'tomatoe', type: 'vegtable', quantity: 0, price: 10 },
  { name: 'rice', type: 'carb', quantity: 0, price: 12 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 11 },
]

let vegtables = [];

for(var i = 0; i < products.length; i++) {
  if(products[i].type === 'vegtable') {
    vegtables.push(products[i].name);
  }
};
console.log(vegtables);

let filteredVeg = products.filter(product => {
  return product.type === 'vegtable'
});

let vegName = filteredVeg.map(veg => {
  return veg.name;
});
console.log(vegName);

function getVegInStock(arr) {
  let vegArr = arr.filter(elem => {
    return elem.type === 'vegtable' && elem.quantity > 0 && elem.price < 11;
  });
  return vegArr;
}

console.log(getVegInStock(products));


// Little bit more of a real world example.

let post = { id: 1, title: 'Example post' }
let comments = [
  { id: 1, postId: 1, content: 'Cool post, mate.' },
  { id: 3, postId: 2, content: 'Cool post, man.' },
  { id: 4, postId: 2, content: 'Cool post, mate.' },
  { id: 2, postId: 1, content: 'This post sucks.' }
]

function getCommentsForPost(post, comments) {
  return comments.filter(comment => {
    return comment.postId === post.id;
  });
}

console.log(getCommentsForPost(post, comments));
