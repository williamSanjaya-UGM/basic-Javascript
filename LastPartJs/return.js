const log = console.log;

let app = null;

app = (function () {
  return {
    buybeer: function (money) {
      if (money > 3) {
        log(`your change is ${money - 3}`);
        return true;
      }
    },
  };
})();
//app = IIFE function so, buybeer function could be accessed
let hadEnough;
hadEnough = app.buybeer(4);
hadEnough ? log("Had Enough") : log("No money");
