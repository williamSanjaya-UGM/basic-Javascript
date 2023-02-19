//Object.freeze, Object.seal, Object.preventExtensions
let parentObj = {
  prop1: 123,
  someMethod: function () {
    console.log("hello");
  },
};

//Create an object and assign the prototype
let obj = Object.create(parentObj, {
  prop2: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "I am prop2 ",
  },
});

obj.innerMethod = function () {
  console.log("obj3inner method");
}; //add a method on the object directly

//add a property to the object and define its property descriptors
Object.defineProperty(obj, "prop3", {
  value: true,
  configurable: true,
  writable: true,
  enumerable: true,
});

//create another object to use as an alternate prototype
let otherProto = {};

//Object.freeze(obj);
Object.seal(obj);
//Object.preventExtensions(obj);
//obj.prop2 = "new string value";
delete obj.prop3;
//console.log(obj.prop2);

//Object method
//Add new prop        => seal() yes  =>freeze() yes  =>preventExtensions() yes
//Edit prop value     => seal() yes  =>freeze() no   =>preventExtensions() yes
//Delete a prop       => seal() yes   =>freeze() yes   =>preventExtensions() yes
//Change descriptors  => seal() no   =>freeze() no   =>preventExtensions() yes
//Reassign            => seal() no   =>freeze() no   =>preventExtensions() no
