let a = { name: "Sherlock" };
let b = { name: "Watson" };
let people = {};

people[a] = "Detective"; //a ['object','object']
people[b] = "Doctor"; //b ['object','object']
//cant't use obejects as keys for other object
//Object keys are converted into a string

//console.log(people[a], people[b]); //fail,will show Doctor Doctor, because peopple[a] ditimpa

let characters = new Map();
characters.set(a, "Detective");
characters.set(b, "Doctors");
console.log(characters.get(a), characters.get(b));

for (let [key, value] of characters) {
  console.log(`${key} =${value}`);
}
