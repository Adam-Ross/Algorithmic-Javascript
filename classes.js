// function Car(options) {
//   this.title = options.title;
// }
//
// Car.prototype.drive = function() {
//   return 'vroom'
// }
//
// function Ford(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }
//
// Ford.prototype = Object.create(Car.prototype);
// Ford.prototype.constructor = Ford;
//
// Ford.prototype.honk = function() {
//   return 'honk';
// }
//
//
// const ford = new Ford({ color: 'red', title: 'focus'});
//
// console.log(ford);
// console.log(ford.drive());
// console.log(ford.honk());


// That sucks, let's do it in es6 using classes instead of prototypical inheritance.

class Car {

  constructor( {title} ) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }

  getTitle() {
    return `This car has a title of ${this.title}`;
  }

}

class Toyota extends Car{

  constructor(options) {
    super(options);
    this.year = options.year;
  }

  stop() {
    return 'screech'
  }
}

const car = new Car({ title: 'M3'});
console.log(car.title);
console.log(car.getTitle());

const toyota = new Toyota({ year: 1999});
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.stop());
