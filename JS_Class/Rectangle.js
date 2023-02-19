class Rectangle {
  constructor(_width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.color = _color;
    //console.log(`The rectangle is being created `);
  }

  getArea() {
    return this.width * this.height;
  }

  printDescription() {
    return `I am a recctangle of ${this.width * this.height} and ${this.color}`;
  }
}

let myRectangle1 = new Rectangle(3, 5, "blue");
console.log(myRectangle1);
console.log(myRectangle1.printDescription());
let myRectangle2 = new Rectangle(10, 5, "red");
console.log(myRectangle2.printDescription());
