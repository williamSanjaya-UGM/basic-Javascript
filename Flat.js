// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const flatArray = matrix.flat(1);

const matrix = [
  [1, 2],
  [1, [[[[[3]]]]]],
];

//let total = matrix.flat(Infinity).reduce((a, b) => a + b, 0);
//console.log(total);

// const nums = [1, 2, 3];
// const strs = ["one", "two", "three"];
//const mapped = nums.map((val, index) => [val, strs[index]]); //[[1,'one'],[2,'two'],[3,'three']];
// const mapped = nums.flatMap((val, index) => [val, strs[index]]);

// console.log(mapped); //[1,'one',2,'two',3,'three']

const strs = ["t", "s", "e", "b"];
let best = strs.reduce((c, v) => c + v);
let bestR = strs.reduceRight((c, v) => c + v);
console.log(best);
console.log(bestR);

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.copyWithin(3); //copy dari index 3 terus lanjut, otomatis buang 3 nilai index di blakang
console.log(nums);
