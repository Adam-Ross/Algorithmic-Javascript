// function Car(options) {
//   this.title = options.title
// }
//
// Car.prototype.drive = function() {
//   return 'vroom'
// }
//
// const car = new Car({title: 'Focus'});
//
// console.log(car);
// console.log(car.drive());

function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom'
}

function Ford(options) {
  Car.call(this, options);
  this.color = options.color;
}

Ford.prototype = Object.create(Car.prototype);
Ford.prototype.constructor = Ford;

Ford.prototype.honk = function() {
  return 'honk';
}


const ford = new Ford({ color: 'red', title: 'focus'});

console.log(ford);
console.log(ford.drive());
console.log(ford.honk());
