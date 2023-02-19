// function x(a) {
//   console.log("x");
//   a();
//   return a; //function y di return dan ditampung ke b, kemudian b diinvoke
// }

// function y() {
//   console.log("y");
// }

// let b = x(y);
// b();
// let b = x(y)();

function greeting(msg) {
  return function (name) {
    console.log(msg, name);
  };
}

// let english = greeting("Hello")("Tom");
// let Italian = greeting("Holaamigos")("Joni");
let english = greeting("Hello");
english("Tom");
let Italian = greeting("Holaamigos");
Italian("Joni");
