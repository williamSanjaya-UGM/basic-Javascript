//Part I
// function x(a) {
//   console.log("x");
//   a();
// }

// function y() {
//   console.log("y");
// }

// x(y);

//Part II IIFE, memberikkan hasil yang sama dengan Part I
//mengartikan bahwa function y dimasukkan dan dijalankan ke function x
(function x(a) {
  console.log("x");
  a();
})(y);

function y() {
  console.log("y");
}

//Part III, pemanggillan tanpa invoke
// function x(a) {
//   console.log("x");
//   a();
//   return a; //return a dipasang atau tidak, tidak akan berpengaruh, krn y tidak dijalankan kembali
//   //b tidak diinvoke
// }

// function y() {
//   console.log("y");
// }
// let b = x(y);
