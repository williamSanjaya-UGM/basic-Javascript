let a = new Map();
a.set("firstName", "William");
a.set("age", 21);
a.set("gender", "M");
a.set("lastName", "Sanjaya");

console.log(a.get("age"));
console.log(a.has("lastName"));
a.forEach((val, i) => console.log(`${i}: ${val}`));

let obj = Object.fromEntries(a.entries()); // to get a plain Object from Map
console.log(obj);

let b = new Map([
  ["firstName", "John"],
  ["lastName", "Stewart"],
  ["age", 34],
  ["gender", "M"],
]);

for (let key of b.keys()) {
  console.log(key);
}

for (let value of b.values()) {
  console.log(value);
}

for (let entry of b.entries()) {
  console.log(entry);
}
b.forEach((val, i) => console.log(`${i}:${val}`));
