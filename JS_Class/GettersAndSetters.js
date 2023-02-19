class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestsForArea = 0;
  }
  get Area() {
    this.numOfRequestsForArea++;
    return this.width * this.height;
  }
  set Area(nilai) {
    this.width = Math.sqrt(nilai);
    this.height = this.width;
  }
  static equals(a, b) {
    //static, dont' use "this" keyword for static referral, used as helper, but dont need instance to work
    return a.width * a.height === b.width * b.height;
  }
  static isValidDimensions(width, height) {
    return width === height;
  }
}

let square1 = new Square(8);
console.log(square1.Area);
square1.Area = 25;
console.log(square1.Area);
console.log(square1.height);
console.log(square1.width);
console.log(square1.Area);
console.log(square1.numOfRequestsForArea);
let square2 = new Square(5);
console.log(Square.equals(square1, square2));
console.log(Square.isValidDimensions(6, 5));
