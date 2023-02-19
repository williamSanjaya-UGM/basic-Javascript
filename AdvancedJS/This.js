var myObj = {
  name: "William",
  hello() {
    return `${this.name}`;
  },
};

console.log(myObj.hello());
