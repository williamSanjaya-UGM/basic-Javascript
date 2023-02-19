//Array dan object menyimpan reference alokasi memori
let a = [1, 2];
let b = a;
b.push(3, 4);
// b = [3, 4];
// b=[...a,3,4]

let huruf = "William";
let word = huruf;
console.log("dari a", a, "dari huruf", huruf);
