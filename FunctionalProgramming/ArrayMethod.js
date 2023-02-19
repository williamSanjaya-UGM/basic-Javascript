var arr = ["a", "b", "c"];

arr.push("d");
console.log(arr);

console.log(arr.pop());
console.log(arr);

var arr2 = ["g", "q"];
console.log(arr.concat(arr2));
console.log(arr2);

// join("!"), akan menambah setiap isi index dengan !
console.log(arr.join("!"));

console.log(arr.reverse());
console.log(arr);

// remove index pertama array
console.log(arr.shift());
console.log(arr);

// menambah index pertama array
console.log(arr.unshift("p"));
console.log(arr);

// slice, dari index [1] sampai index [n-1], yaitu 1
// slice bersifat non-imutable
console.log(arr.slice(1, 3));

arr.push("i", "f");
arr2 = arr.sort();
console.log(arr2);

// splice memutasi array
// berdassarkan syntax dibawah: diambil dari index ke:2, count:2, ubah/tambah menjadi:"JS Nuggets",capricorn,nutella
console.log(arr.splice(2, 2, "JS Nuggets", "capricorn", "nutella"));
console.log(arr, arr.length);

// https://stackoverflow.com/questions/39827087/add-key-value-pair-to-all-objects-in-array
// give the best possibility answer to add key value pair into array
let obj = [{ firstname: "william", lastname: "sanjaya" }];
let obj2 = [
  { firstname: "william", lastname: "sanjaya" },
  { firstname: "Johnny", lastname: "tampan" },
];
var arrobj = obj.map((el) => {
  var o = Object.assign({}, el);
  o.handsome = "high";
  return o;
});
console.log(arrobj);

var second_arrobj = obj.map((v) => ({ ...v, handsome: "high" }));
console.log(second_arrobj);

var arrobj2 = obj2.map((v) =>
  v.firstname === "william"
    ? { ...v, handsome: "high" }
    : { ...v, handsome: "low" }
);

console.log(arrobj2);
