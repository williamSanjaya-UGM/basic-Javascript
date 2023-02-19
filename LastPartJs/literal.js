//Object literal
let Obj1 = {
  a: "this",
  b: "is",
  c: "an",
  d: "object",
  e: "literal",
};
let Obj2 = new Object(["object", "constructor", "one"]); //new Array("","","")
let Obj3 = new Object({ an: "object", literal: "again" });
let Obj4 = new Object(Obj1.a); //new String("")
let Obj5 = new Object(); //new Object(null) , new Object(undefined)
let Obj6 = new Object(true); //new Boolean(true)

console.log(
  "Obj1",
  Obj1,
  typeof Obj1,
  Obj1 instanceof Object,
  Obj1.constructor
);

console.log(
  "Obj2",
  Obj2,
  typeof Obj2,
  Obj2 instanceof Array,
  Obj2 instanceof Object,
  Array.isArray(Obj2),
  Obj2.constructor
);

console.log(
  "Obj3",
  Obj3,
  typeof Obj3,
  Obj3 instanceof Object,
  Obj3.constructor
);

console.log(
  "Obj4",
  Obj4,
  typeof Obj4,
  Obj4 instanceof String,
  Obj4 instanceof Object,
  Obj4.constructor
);

console.log(
  "Obj5",
  Obj5,
  typeof Obj5,
  Obj5 instanceof Object,
  Obj5.constructor
);

console.log(
  "Obj6",
  Obj6,
  typeof Obj6,
  Obj6 instanceof Boolean,
  Obj6 instanceof Object,
  Obj6.constructor
);
