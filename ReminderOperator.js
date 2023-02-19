// const reminder = 20 % 7;

// console.log(reminder);

//Logik penerapan matematikanya dibawah, condensing large number into small number,
//Menjadikan perbilangan kelipatan 3
function getColor(name) {
  const colors = ["green", "red", "Blue"];
  const index = name.length % colors.length;

  return colors[index];
}

(function setup(num) {
  for (let i = 0; i < num; i++) {
    console.log(i % 5);
  }
})(20);

console.log(getColor("Dom")); //green
console.log(getColor("John")); //red
console.log(getColor("Johny")); //Blue
