// function makeFunc() {
//   var name = "JS Nuggets";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// var myFunc = makeFunc()(); //IIFE compose
// myFunc();

var counter = (function makeFunc() {
  //ini akan menjadi bersifat private
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  //di bawah ini, return akan menjadi bersifat public
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); //print value mula mula
counter.increment(); //+1
counter.increment(); //+1
console.log(counter.value()); //print jadi 2
counter.decrement();
console.log(counter.value()); // print jadi 1
