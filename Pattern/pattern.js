// function pattern() {
//   for (let i = 0; i < 10; i++) {
//     for (let j = i; j < 10; j++) {
//       process.stdout.write("*");
//     }
//     process.stdout.write("\n");
//   }
// }
// pattern();

function pattern2() {
  for (let i = 1; i < 6; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

pattern2();
