let num1 = 1,
  num2 = 2,
  num3 = 3,
  num4 = 4;

// console.log(num3);

// for (let i = 1, j = 2; i < 20; i++, j++) {
//   console.log(i + j);
// }

// Show the fibonacci
for (let i = 2, r = [0, 1]; i < 15; r.push(r[i - 1] + r[i - 2]), i++) {
  console.log(r);
}

// let cnt = 0;
// while ((cnt++, cnt < 100)) {
//   console.log(cnt);
// }

let passOrFail = function (obj, score) {
  obj.score >= score
    ? ((obj.pass = true), (obj.complete = true))
    : ((obj.pass = false), (obj.complete = false));
  return obj;
};

let objek = {
  score: 12,
  pass: null,
  complete: null,
};

// let numSeparator = 125_000_000;

console.log(passOrFail(objek, 7));
// console.log(numSeparator);
