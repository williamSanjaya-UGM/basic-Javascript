//Iterator example
const numbers = [1, 2, 3];
const numbersIterator = numbers[Symbol.iterator]();

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());

for (const n of numbers) {
  console.log(n);
}

//Make Object as an iterator
function squared(max) {
  return {
    [Symbol.iterator]() {
      let n = 0;

      return {
        next() {
          n++;
          if (n <= max) {
            return {
              value: n * n,
              done: false,
            };
          }

          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
}

const squaredIterator = squared();
// console.log(squaredIterator.next());
// console.log(squaredIterator.next());
// console.log(squaredIterator.next());
// console.log(squaredIterator.next());
// console.log(squaredIterator.next());
// console.log(squaredIterator.next());

for (const n of squared(10)) {
  console.log("start here", n);
}

class NumberList {
  constructor() {
    this.numbers = [1, 2, 3, 4];
  }

  [Symbol.iterator]() {
    const numbers = this.numbers;
    let currentIndex = -1;

    return {
      next() {
        return {
          value: numbers[++currentIndex],
          done: currentIndex >= numbers.length,
        };
      },
    };
  }
}

// const numListIterator = new NumberList()[Symbol.iterator]();

// console.log(numListIterator.next());
// console.log(numListIterator.next());
// console.log(numListIterator.next());
// console.log(numListIterator.next());
// console.log(numListIterator.next());

const numListIterator = new NumberList();

for (const n of numListIterator) {
  console.log(n);
}
