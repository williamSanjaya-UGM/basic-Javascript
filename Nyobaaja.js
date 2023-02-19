// let string = "William";
// let date = new Date().getTime();
// console.log(string.startsWith("W"));
// console.log(string.endsWith("m"));
// // console.log(date);

// let _array = [0, 3, 4];
// _array[10] = 7;
// let [b, ...rest] = _array;
// let c = _array[8];
// console.log(_array, _array.length, _array[2], c);
// //console.log(rest)
// console.log(new Date());
// console.log(`Hello\nBro\tCoy`);
// console.log(Math.max(2, 3));

// function logIncome(val) {
//   //   let highIncome = val > 100000;
//   //   return Boolean(highIncome) ? "pendapatan tinggi" : "pendapatan rendah";
//   return val > 100000 ? "pendapatan tinggi" : "pendapatan rendah";
// }

// console.log(logIncome(120000));

// function fizzbuzz(val) {
//   if (val) {
//     return val % 15 === 0
//       ? "FizzBuzz"
//       : val % 5 === 0
//       ? "Fizz"
//       : val % 3 === 0
//       ? "Buzz"
//       : val;
//   } else {
//     return "Must higher than 0";
//   }
// }
// console.log(fizzbuzz(3));

const firstLetterBig = (val) => {
  let [first, ...rest] = val.split(" ")[1];
  return first.toUpperCase() + rest.join("").toLowerCase();
};

const firstLetterBig2 = (val) => {
  let words = val.split(" ")[1];
  return words[0].toUpperCase() + words.substr(1).toLowerCase();
};

const firstLetterBig3 = (val) =>
  val.split(" ")[1][0].toUpperCase() +
  val.split(" ")[1].substr(1).toLowerCase();

const perbesarNamaBelakang = (nama) =>
  nama.split(" ")[1] ? firstLetterBig2(nama) : "Mohon Sediakan nama belakang";

function Name() {
  return perbesarNamaBelakang("William tampan");
}

console.log(Name());
// console.log(firstLetterBig3("William Sanjaya"));

// let i = 0;
// function loop() {
//   while (i < 20) {
//     i++;
//     if (i === 18 || i === 20) continue;
//     console.log(i);
//   }
//   return;
// }

// loop();

function tunggu() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("At least i'm executed"), 8000)
  );
}

function putar() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
  return arr;
}

(async function Replacement() {
  console.log("Go");
  let wait = await tunggu();

  let putarputar = putar();

  console.log(wait);
  console.log(putarputar);
})();
