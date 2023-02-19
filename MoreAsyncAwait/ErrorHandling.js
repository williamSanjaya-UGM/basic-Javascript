async function yolo() {
  const wes = await axios.get("https://something");
}

// Create HOF
//make a function to handle the error
function handleError(fn) {
  return function (...params) {
    return fn(...params).catch(function (err) {
      // do something with the error!
      console.error("Oops!", err);
    });
  };
}

//Hot Shot Implicit Return
const handleError = () => (...params) => fn(...params).catch(console.error);

/** ****************************************************** */
const catchErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

const catchErrors = (fn) => (req, res, next) => fn(req, res, next).catch(next);

/** ****************************************************** */
//Handle error when you call it, handling error in special case
//Solution 4:
async function loadData() {
  const wes = await axios.get(".....");
}

loadData().catch(dealWithErrors);

/** ****************************************************** */
//Solution 5:
process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error);
});
