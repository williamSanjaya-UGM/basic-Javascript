const names = ["john", "bob", "mary", "joe"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// //   if (names[i] === "mary") break;
// }

for (name of names) {
  //deconstructing array and then assign it to the name variable
  //slight bit slower from normal for loop
  console.log(name);
}

const user = { firstName: "John", lastName: "Doe", coy: "coy" };
//for in same as below:
//console.log(user["firstName"], user["lastName"]);
let tampungan = [];
for (key in user) tampungan += user[key] + " ";
console.log(tampungan);

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
  if (i === 8) break;
}

let j = 0;
while (j < 10) {
  j++;
  if (j === 6 || j === 7) continue;
  console.log(j);
}

//the do statement will run first and then check the loop condition
let k = 0;
do {
  k++;
  if (k === 6) continue;
  console.log(k);
} while (k < 0);
