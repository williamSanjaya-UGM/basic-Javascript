//Primitive data type in js: Number,String,boolean,null,undefined,symbols
let symbol1 = Symbol("Symbol2");
let symbol2 = Symbol("Symbol2");
// the word "Symbol2" inside Symbol("Symbol2"), is just a label
console.log(symbol1 === symbol2);
console.log(typeof symbol1);
console.log("Symbol: " + symbol1.toString());

// Use Case1: Symbols as property keys
const MY_KEY = Symbol();
let obj = {};
obj[MY_KEY] = 123;
console.log(obj[MY_KEY]);

// Use Case2: Constants representing concepts
const COLOR_RED = Symbol("Red");
const COLOR_ORANGE = Symbol("Orange");
const COLOR_YELLOW = Symbol("Yellow");
const COLOR_GREEN = Symbol("Green");
const COLOR_BLUE = Symbol("Blue");
const COLOR_VIOLET = Symbol("Violet");

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_ORANGE:
      return COLOR_BLUE;
    case COLOR_YELLOW:
      return COLOR_VIOLET;
    case COLOR_GREEN:
      return COLOR_RED;
    case COLOR_BLUE:
      return COLOR_ORANGE;
    case COLOR_VIOLET:
      return COLOR_YELLOW;
    default:
      throw new Exception("Unknown color: " + color);
  }
}

console.log(getComplement(COLOR_ORANGE));
console.log(getComplement(COLOR_BLUE));
