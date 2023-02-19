function sum(a, b, ...nums) {
  console.log(a * b);
  console.log("nums", nums);
}

sum(3, 3, 3, 4, 5, 6, 7);

var a = [1, 2, 3];
var d = [...a, 4, 5];
console.log("d", d);

//Computed object keys
var name = "something";
var object = {
  [name]: "contoh",
};
console.log(object[name]);
console.log(object.something);

//generators
function* range(start, end) {
  while (start < end) {
    yield start;
    start += 1;
  }
}

for (let i of range(0, 10)) {
  console.log(i);
}
