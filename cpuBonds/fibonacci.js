//CPU Bond Task
const fibonacci = (n) => {
  if (n <= 2) {
    return;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
sTime = process.hrtime();
console.log(fibonacci(46));
console.log(process.hrtime(sTime));
