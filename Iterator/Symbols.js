const dragons = ["cool dragon", "angry dragon", "cringy dragon"];

const iterator = dragons[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (const char of dragons[0]) {
  console.log(char);
}
for (const dragon of dragons) {
  console.log(dragon);
}
