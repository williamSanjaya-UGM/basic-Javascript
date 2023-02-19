const student = {
  name: "Alex",
  age: 20,
  email: "alex@gmail.com",
};
// Stringify, turns object into string
const string = JSON.stringify(student);
console.log(string);

// Parse, turns string into object or array
console.log(JSON.parse(string));
