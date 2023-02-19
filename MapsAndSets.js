//Maps like objects, have keys and values (unique keys)
/*
 .size
 .set(key,value)
 .delete(key)
 .get(key)
 .has(key)
 .keys() //return iterator with array of keys
 .values() //return iterator with array of values
 .entries() //return iterator with array of [key,value]
 .clear()
 .forEach()
 */

//Sets like arrays but shows as an object they have values (unique values) --remove non unuiqe value from arrays
/*
.size
.add(value)
.delete(value)
.entries() returns iterator with array of [value,value]
.values()  returns iterator with array of values
.has(value)
.clear()
.forEach()
*/
/************************ */
let log = console.log;

let obj = {
  prop1: 123,
  prop2: "abc",
};
obj.prop2 = "def";
//log(obj);
//let map= new Map(obj);//will fail becuse object is not iterable
let map = new Map();
map.set("prop1", 321);
map.set("prop2", "def");
log(map);
log(map.forEach((x, val) => console.log("log_an dari Map", x, val)));

let names = ["Rob", "Bran", "Arya", "Sansa", "Richard"];
names.push("Rob");
let set1 = new Set(names);
//easy way to remove duplicates from an Array
log(set1);
log(set1.forEach((x, val) => console.log("log_an dari Set", x, val)));
