let PersonC = class {
  constructor(nm, id) {
    this.name = nm;
    this.id = id;
  }
  getDetails() {
    return `${this.name} :: ${this.id}`;
  }
};
let bob = new PersonC("Bob", 123);
console.log(bob.getDetails(), bob.name);

let EmployeeC = class extends PersonC {
  //EmployeeC prototype links to PersonC prototype
  constructor(nm, id, salary) {
    super(nm, id);
    this.salary = salary;
  }
  employeeInfo() {
    //Exist on the prototype of EmployeeC
    return `${this.name} :: ${this.id} :: ${this.salary}`;
  }
};
let noom1 = new EmployeeC("Noom1", 456, 86000);
console.log(noom1.employeeInfo(), noom1.name, noom1.getDetails());

////////////////
let PersonP = function (nm, id) {
  this.name = nm;
  this.id = id;
};
PersonP.prototype.getDetails = function () {
  return `${this.name} :: ${this.id}`;
};
//dgn meletakkan new, PersonP akan secara otomatis mengembalikan instance object PersonP
let fred = new PersonP("Fred", 321);
console.log(fred.getDetails(), fred.name);

let EmployeeP = function (nm, id, salary) {
  PersonP.call(this, nm, id);
  this.salary = salary;
};
Object.setPrototypeOf(EmployeeP, PersonP.prototype);
EmployeeP.prototype.employeeInfo = function () {
  return `${this.name} :: ${this.id} :: ${this.salary}`;
};
let Mary = new EmployeeP("Mary", 654, 65000);
console.log(Mary.employeeInfo());
