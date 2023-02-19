/*
class
extends
constructor
super
get
set
static
*/
class Vehicle {
  constructor(_wheels) {
    this.numWheels = _wheels;
  }
  get wheels() {
    return this.numWheels;
  }
  set wheels(_wheels) {
    //memberikan akses agar dapat dioverwrite dari luar
    this.numWheels = _wheels;
  }
  static accelerate() {
    console.log("go faster");
  }
  static decelerate() {
    console.log("go slower");
  }
  justAMethod() {
    //like a function
  }
}

let car = new Vehicle(4);
let car1 = new Vehicle(2);
let car2 = new Vehicle(6);
car.wheels = 7;
console.log(car.wheels);
Vehicle.decelerate();

class Car extends Vehicle {
  constructor(_wheels, _make, _model, _year) {
    super(_wheels);
    this.make = _make;
    this.model = _model;
    this.year = _year;
  }
  info() {
    //This. wheels bisa dipanggil karena di parents sudah di get dan set
    console.log(
      "The",
      this.make,
      this.model,
      "was made in",
      this.year,
      "and has",
      this.wheels,
      "wheels"
    );
  }
}

let ferrari = new Car(9, "Ferrari", "Testarosaa", 1985);
ferrari.info();
Car.accelerate();
