let a = new Set(["William", "Sanjaya", "M", 23]);

a.forEach((val) => console.log(`${val}`));

let arr = Array.from(a); // convert Set into Array
arr.push("Perkedel");
arr.forEach((val) => console.log(`${val}`));
arr.map((val) => console.log(`${val}`));

let b = new Set();
b.add("William");
b.add("Sanjaya");

b.forEach((val) => console.log(`${val}`));

for (let value of b.entries()) {
  console.log(value);
}

for (let value of b.keys()) {
  console.log(value);
}

for (let value of b.values()) {
  console.log(value);
}
