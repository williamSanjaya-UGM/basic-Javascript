// function Hitung() {
//   let number;
//   for (var i = 0; i < 5; i++) {
//     number = i;
//     setTimeout(() => {
//       console.log(number);
//     }, 1000);
//   }
// } // will print 4, 5 times, it's because the number will save up the value, and also the important thing,
// //because of the var scope

//The correction
function Hitung() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
} // will print 0-4, with 1 sec delay

Hitung();
