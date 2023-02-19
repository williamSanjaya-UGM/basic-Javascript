function outerFunction(outerVal) {
  return function innerFunction(innerVal) {
    console.log(`nilai Outer ${outerVal}`);
    console.log(`nilai InnerVal ${innerVal}`);
  };
}

const functionBaru = outerFunction("nilai awal");
functionBaru("nilai akhir");

function closure() {
  let privateValue = 0;
  function changeBy(value) {
    privateValue += value;
  }
  return {
    increment: function (value) {
      changeBy(value);
    },
    decrement: function (value) {
      changeBy(-value);
    },
    value: function () {
      return privateValue;
    },
  };
}

const counter = closure();
counter.increment(3);
console.log(counter.value());
counter.decrement(1);
console.log(counter.value());
