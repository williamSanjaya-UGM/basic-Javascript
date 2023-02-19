//Nullish coalescing check for null or undefined
function getUserDefinedSettings() {
  return {
    difficulty: "easy",
    startingCash: 0,
  };
}

// const cash =
//   getUserDefinedSettings().startingCash === undefined
//     ? 500
//     : getUserDefinedSettings().startingCash;

//sama hasilnya seperti syntax diatas
const cash = getUserDefinedSettings().startingCash ?? 500;

console.log(cash);

//latihan pengingat array
const array = [
  [1, "William"],
  [2, "Sanjaya", "ketiga"],
  [3, "Didjaja"],
];

console.log(array[1][2]);
