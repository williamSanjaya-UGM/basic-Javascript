//The resolve will go into then, the reject will go into catch
function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === (0 || undefined)) {
      //reject(new Error("You cannot divide it by 0 or undefined"));
      reject("You cannot divide it by 0 or undefined");
      return;
    }
    resolve(a / b);
  });
}

divide(10, 2)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(`There is error ${error}`);
  });
