function* generatorExample() {
  console.log("code");
  yield 8;
  yield 9;
  yield 10;
  return 11;
}

// const generator = generatorExample();

// console.log(generator.next());
// // do other things
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

for (const n of generatorExample()) {
  //info: return 11 will not be printed, but if you use yield, it will be printed
  console.log(n);
}
