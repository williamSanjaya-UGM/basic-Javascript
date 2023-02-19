const numFormat = new Intl.NumberFormat("id");
const currencyFormat = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "IDR",
  //   useGrouping: true,
  // tanpa currencyDisplay, ketika basis "en" akan membuat menjadi IDR
  currencyDisplay: "narrowSymbol",
});
const datefrmt = new Intl.DateTimeFormat("id");
const num = 120_000_000;
const now = new Date().getTime();
console.log(numFormat.format(num));
console.log(currencyFormat.format(num));
console.log(datefrmt.format(now));
