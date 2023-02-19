//3 ways to turn object into itterable object
let westeros = {
  cersei: "Lannister",
  arya: "Stark",
  jon: "Snow",
  brienne: "Tarth",
  daenarys: "Targaryen",
  theon: "Greyjoy",
  margaery: "Tyrell",
  sandor: "Cleagne",
  samwell: "Tarly",
  ramsey: "Bolton",
};

//for (let prop of arr)
//foreach() map() filter()

// let keys = Object.keys(westeros);
// console.log(keys);

// let vals = Object.values(westeros);
// console.log(vals);

let entries = Object.entries(westeros);
console.log(entries);
console.log(entries[2][1]);
