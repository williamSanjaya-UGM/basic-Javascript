/* ************************
for await(let val of obj){
    use the async reulst
}
************************
*/

// let thing = [
//   new Promise((resolve) => {
//     setTimeout(resolve, 1000, "one");
//   }),
//   new Promise((resolve) => {
//     setTimeout(resolve, 2000, "two");
//   }),
//   new Promise((resolve) => {
//     setTimeout(resolve, 3000, "three");
//   }),
// ];

let thing = [
  new Promise((resolve) => {
    setTimeout(resolve, 4000, "one");
  }),
  new Promise((resolve) => {
    setTimeout(resolve, 1000, "two");
  }),
  new Promise((resolve) => {
    setTimeout(resolve, 1000, "three");
  }),
];

(async function () {
  for await (let res of thing) {
    console.log(res);
  }
  console.log("Done!");
})();
