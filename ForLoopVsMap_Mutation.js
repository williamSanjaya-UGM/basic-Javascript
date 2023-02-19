let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] += i;
  console.log(`dari dalem ${arr}`);
}
console.log(`dari luar ${arr}`);

let arr2 = [10, 20, 30, 40, 50];
let kasus = arr2.map((val, i) => {
  //console.log(`dari dalem ${kasus}`);
  return val + i;
});

console.log(arr2);
console.log(kasus);
