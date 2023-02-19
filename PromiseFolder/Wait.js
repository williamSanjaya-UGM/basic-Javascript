const seconds = 1000;

function wait(ms) {
  return new Promise((resolve, reject) => {
    if (ms === 0 || ms < 0) {
      reject(new Error("Cannot wait 0 s or less than 0"));
      return;
    }
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

wait(seconds)
  .then(function () {
    console.log(`Successfully waited ${seconds / 1000} second`);
  })
  .catch(function (error) {
    console.log(`Failed ${error.message}`);
  });
