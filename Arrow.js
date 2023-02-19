//dont use arrow function for methods
const cameras = {
  price: 600,
  weight: 2000,
  myDes() {
    return `This canon camera is ${this.price}`;
  },
};

console.log(cameras.myDes());
