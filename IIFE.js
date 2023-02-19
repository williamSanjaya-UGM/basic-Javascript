//IIFE memungkinkan kita untuk langsung "menginvoke" function()
(function sayHi() {
  console.log("Hi Hi");
})();

(favNumber = function (num = 3) {
  console.log(`favNumber is ${num}`);
})();

// favNumber = (function (num = 3) { //sama seperti di atas
//   console.log(`favNumber is ${num}`);
// })();

favNumber(5);
