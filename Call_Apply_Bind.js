// let bob = function (num, str) {
//   //console.log("bob", num, str); //1
//   console.log("bob", num, str, this); //2
// };

let bob = function (num, str, x) {
  //console.log("bob", num, str); //1
  console.log("bob", num, str, this, x); //2
};

let bill = {
  name: "Bill Murray",
  movie: "Lost in Translation",
  myMethod: function (fn) {
    //fn(2, "hello"); //diisi num,str
    let n = arguments[1];
    let s = arguments[2];
    fn.apply(bill, [n, s]);
  },
};

// bill.myMethod(bob);
//call:bob 1, tidak menunjuk bill={}. bob 2, menunjuk bill={}
// bob.call(bill, 2, "goodbye");
// let arr = [3, "hi"];
// bob.apply(bill, arr);
// bill.myMethod(bob, 4, "Ciao");

let panggil = bob.bind(bill, 5, "Brooo");
// panggil();
panggil("mama");
