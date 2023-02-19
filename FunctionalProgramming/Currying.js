const _ = require("lodash");
let dragon = (name, size, element) =>
  `${name} is a ${size} dragon who breates ${element}`;

dragon = _.curry(dragon);
let William = dragon("William");
let Big = William("Big");
let Fire = Big("Fire");
console.log(Fire);

// let dragon = (name) => (size) => (element) =>
//   `${name} is a ${size} dragon who breates ${element}`;

// let William = dragon("William");
// let Big = William("Big");
// let Fire = Big("Fire");

// console.log(Fire);
// console.log(dragon("William")("Big")("Fire"));
