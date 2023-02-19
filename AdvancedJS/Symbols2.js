//Usually used for giving unique value purpose
const idSym = Symbol("id");
let user = {
  id: 199278,
  name: "John",
  gender: "M",
  [idSym]: 232323,
};

// console.log(user);

//Symbol.for -> global symbol for reference to "cat"
const sym1 = Symbol.for("cat");
const sym2 = Symbol.for("cat");
// console.log(sym1 === sym2);

// Another use case for symbol
// kalau menggunakan this.length, maka tulisan length 4 juga akan ikut ter console.log
// symbol digunakan agar ketika nge loop object, Symbol tidak ikut dimasukkan (di exclude), tidak ikut terakses
const length = Symbol("length");
class Train {
  constructor() {
    this[length] = 0;
  }

  add(car, contents) {
    this[car] = contents;
    this[length]++;
  }
}

let freightTrain = new Train();
freightTrain.add("refigerator Car", "Cattle");
freightTrain.add("flat car", "aircraft parts");
freightTrain.add("tank car", "milk");
freightTrain.add("hopper car", "coal");

for (car in freightTrain) {
  console.log(car, freightTrain[car]);
}

// Symbol UseCase
// To create unique IDs to add something in, totally unique keys, no threat of overwriting
class AlertService {
  constructor() {
    this.alerts = {};
  }

  addAlert(symbol, alertText) {
    this.alerts[symbol] = alertText;
    this.renderAlerts();
  }

  removeAlert(symbol) {
    delete this.alerts[symbol];
  }

  renderAlerts() {}
}

const alertService = new AlertService();

class MyComponent {
  constructor(thing) {
    this.componentId = Symbol(thing);
  }

  errorHandler(msg) {
    alertService.addAlert(this.componentId, msg);
    setTimeout(() => {
      alertService.removeAlert(this.componentId);
      console.log("removed alert", this.componentId);
    }, 5000);
  }
}

let list = new MyComponent("listComponent");
let list2 = new MyComponent("listComponent");
let form = new MyComponent("inputComponent");

//list.errorHandler('Problem1');
//list2.errorHandler('Uh Oh!');
