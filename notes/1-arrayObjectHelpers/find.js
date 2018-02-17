// Search through an array, and return one that has specific spec.

// let users = [ { name: 'jack'},
//               { name: 'Jill'},
//               { name: 'john'},
//               { name: 'jane'},
//               { name: 'jake'} ]
//
// let userByName = [];
//
// for(let i = 0; i < users.length; i++) {
//     if(users[i].name === 'jake') {
//       userByName.push(users[i])
//     }
//   };
//
// console.log (userByName);
//
// let userByNameFind = users.find(user => {
//   return user.name === 'jake';
// });
//
// console.log(userByNameFind);


function Car(model) {
  this.model = model;
}

let cars = [
  new Car('Buick'),
  new Car('Focus'),
  new Car('Mazda')
]

let foundCar = cars.find(car => {
  return car.model === 'Focus'
})

console.log(foundCar.model);
