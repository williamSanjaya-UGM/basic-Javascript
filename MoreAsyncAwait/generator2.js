function* createSquaredNumberGenerator(max) {
  let n = 0;
  while (n < max) {
    n++;
    yield n * n;
  }
}

// const squaredNumbers = createSquaredNumberGenerator();
// console.log(squaredNumbers.next().value);
// console.log(squaredNumbers.next().value);
// console.log(squaredNumbers.next().value);
// console.log(squaredNumbers.next().value);

for (const n of createSquaredNumberGenerator(11)) {
  console.log(n);
}
