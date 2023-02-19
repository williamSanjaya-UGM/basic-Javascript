class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic Animal Sound");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  //Overwrite makeSound in parent
  makeSound() {
    super.makeSound();
    console.log("Woof Woof");
  }
}

const a1 = new Animal("william");
const a2 = new Dog("Sanjaya");

a1.makeSound();
a2.makeSound();
