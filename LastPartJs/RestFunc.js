const addAll = (num1, num2, ...rest) => ({
  angka1: num1,
  angka2: num2,
  sisanya: rest,
});

console.log(addAll(2, 3, 4, 5, 6, 7));
