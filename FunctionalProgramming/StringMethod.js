var stringOne = "Best Place to learn";
var stringTwo = "Frontend and backend development";

//  karakter di index [1]
console.log(stringTwo.charAt(1));

// unicode karakter di index [1]
console.log(stringTwo.charCodeAt(1));

// concat string
console.log(stringOne.concat(stringTwo));

// endWith()
console.log(stringOne.endsWith("learn"));

// mengubah unicode ke char
console.log(String.fromCharCode(114));

// mengecek apakah karakter yang dimaksud ada dalam string
console.log(stringOne.includes("lac"));

// mencari index ke
console.log(stringTwo.indexOf("end"));

// mencari index terakhir
console.log(stringTwo.lastIndexOf("end"));

// match()
console.log(stringTwo.match(/end/g));

// mengulang isi variabel
console.log(stringOne.repeat(3));

// replace()
console.log(stringTwo.replace(/end/g, "END"));

// search(), hasilnya hampir sama seperti indexOf
console.log(stringTwo.search("end"));

// slice(), ambil dari index [2], sampai index [n-1], yaitu [3]
console.log(stringTwo.slice(2, 4));

//split()
console.log(stringTwo.split(" "));

// startsWith()
console.log(stringOne.startsWith("Best"));

// substr(), ambil index 2, setelah itu hitung ambil 4 setelahnya
console.log(stringTwo.substr(2, 4));

// substring(), sama kyak slice
console.log(stringTwo.substring(2, 4));

console.log(stringTwo.toLowerCase());

console.log(stringTwo.toUpperCase());

// trim()
var stringThree = "  Hello   ";
console.log(stringThree.trim());
