const arr_Hitung = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hallo aku pertama");
    }, 4000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hallo aku kedua");
    }, 6000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hallo aku ketiga");
    }, 3000);
    // setTimeout(() => {
    //   reject(new Error("Sorry aku gagal"));
    // }, 3000);
    // return;
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hallo aku keempat");
    }, 8000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hallo aku kelima");
    }, 1000);
  }),
];

async function counting() {
  try {
    for await (let arr of arr_Hitung) {
      console.log(arr);
    }
  } catch (err) {
    console.log(err.toString());
  }
}

counting();
