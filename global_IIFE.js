var a = 2;
(function () {
  var a = 3;
  console.log("dari a1", a); //3
})();
console.log("dari a2", a); //2

let b = 2;
{
  let b = 3;
  console.log("dari b1", b); //3
}

console.log("dari b2", b); //2
