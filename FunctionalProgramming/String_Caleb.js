let content =
  "Today we'll be talking about string methods and how fun they are";
let search1 = "string";
let search2 = "number";

//.substring() ; seperti .slice(), potong dari index 6 - (11-1)
console.log(content.substring(6, 11)); // we'll

//. substr() ; start dari index 6, setelah itu ambil 11 kata setelahnya
console.log(content.substr(6, 11)); // we'll be ta

// .slice() ; sama seperti .substring()
console.log(content.slice(6, 11));

console.log(search1.repeat(10));

console.log(content.split(" "));
