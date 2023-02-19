//No TCO
// const woo = (n) => {
//   if (n === 0) return "";
//   return woo(n - 1) + "!";
// };

// console.log(woo(7));

//After TCO, not quite yet
//but in node engine, still won't work
// const woo = (n, acc) => {
//   if (n === 0) return acc;
//   return woo(n - 1, acc + "!");
// };
// console.log(woo(99999, ""));

const woo = (n) => {
  const woo = (n, acc) => {
    if (n === 0) return acc;
    return woo(n - 1, acc + "!");
  };
  return woo(n, "");
};
console.log(woo(process.argv[2]));
