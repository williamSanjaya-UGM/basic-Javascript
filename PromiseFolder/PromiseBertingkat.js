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

//atau bahkan bisa dimasukkan ke dalam var/const, cth: var menunggu=function tunggu()
function tunggu(ms) {
  return new Promise((resolve, reject) => {
    if (ms > 10000) {
      reject(new Error("Cannot above 10000 millidetik"));
      return;
    }
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function pesan(msg) {
  console.log(msg);
}

wait(seconds)
  .then(function () {
    console.log(`Successfully waited ${seconds / 1000} second`);
  })
  .then(() => {
    tunggu(3000)
      .then(() => console.log("dipanggil suskes sebagai last"))
      .then(() => {
        const message = "This is stupid message pesan";
        pesan(message);
      })
      .catch((error) => console.log(`Failed ${error.message}`));
  })
  .catch(function (error) {
    console.log(`Failed ${error.message}`);
  });
