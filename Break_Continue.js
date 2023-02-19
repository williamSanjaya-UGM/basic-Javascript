//Basic break & Continue
for (let i = 0; i < 10; i++) {
  if (i === 3 || i === 6) {
    continue;
  }
  console.log(i);
  if (i === 8) {
    break;
  }
  // console.log(i);
}
console.log("~~~~~~~~~~~~~~~~~~~~");

// let myString = "Search this c string ac baby";
// let charToSearch = "c";
// function a() {
//   let tamp = [];
//   for (let i = 0; i < myString.length; i++) {
//     // if (myString[i] === charToSearch) {
//     //     console.log(myString[i] + " is found at index " + i);
//     //     //use break if just want to find one c
//     //     break;
//     //   }

//     if (myString[i] === "a") {
//       continue;
//     }
//     tamp += myString[i];
//   }
//   return tamp;
// }

// //console.log(a());

// //learn label
// {
//   let grades = [
//     [12, 13, 32, 43, 42, 23],
//     [12, 43, 21, 43, 12, 54, 23, 12, 23, 23],
//     [43, 12, 45, 12],
//   ];

//   outerLoop: for (let i = 0; i < grades.length; i++) {
//     for (let k = 0; k < grades[i].length; k++) {
//       console.log(grades[i][k]);
//       if (grades[i][k] === 54) {
//         console.log("You found the value");
//         //break;
//         //continue outerLoop; // wll work almost the same as break, except the difference is with --------
//         break outerLoop; // will jump straight to line 44* after "You found the value", and end the search
//       }
//       console.log("doing stuff");
//     }
//     console.log("-----------------"); //this ocde is ignored with continue outerLoop
//     //the above code will not ignored with break
//   }
//   //break outerLoop will jump here
// }
