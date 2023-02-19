class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  describe() {
    return `i am ${this.name} and I am ${this.age} years old`;
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperience) {
    super(_name, _age);

    //Custom behaviour
    this.yearsOfExperience = _yearsOfExperience;
  }

  code() {
    return `${this.name} is coding`;
  }
}

let person1 = new Person("Jeff", 45);
let programmer1 = new Programmer("Dom", 56, 12);

console.log(person1);
console.log(programmer1);
//console.log(person1.code()); //parent can't access child
console.log(programmer1.describe());

const programmers = [
  new Programmer("Dom", 56, 12),
  new Programmer("Jeff", 24, 4),
];

(function developSoftware(programmers) {
  for (let programmer of programmers) {
    console.log(programmer.code());
  }
})(programmers);

//programmers.map((item) => console.log(item.code())); //sama seperti di atas
