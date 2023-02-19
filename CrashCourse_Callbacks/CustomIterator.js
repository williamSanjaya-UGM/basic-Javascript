let myObj = {
  prop: 1,
  prop2: "bob",
  prop3: true,
};
myObj[Symbol.iterator] = function () {
  return {
    next: function () {
      return { value: undefined, done: true };
    },
  };
};

for (let prop of myObj) {
  console.log(prop);
}
