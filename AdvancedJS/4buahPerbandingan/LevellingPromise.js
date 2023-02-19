function hitungSatu(val1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val1);
    }, 2500);
  });
}

function hitungDua(val2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val2);
    }, 3500);
  });
}

function hitungTiga(val2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val2);
    }, 4000);
  });
}

let arr_tampung = [];
let arrsecond = [];

function adder() {
  return arr_tampung.map((data) =>
    arrsecond.push({ ...data, age: "manipulated" })
  );
}

function pushingVal(data) {
  return arr_tampung.push({ ...data, Major: "Electircal Science" });
}

function Checker() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr_tampung.length > 0) {
        resolve(adder());
      } else {
        console.log("Failed");
        reject(new Error("gagal Nampung"));
        return;
      }
    }, 2000);
  });
}

hitungSatu({ name: "John", age: 22 })
  .then((data) =>
    hitungDua(data.name)
      .then((data) =>
        hitungTiga({ firstName: data, lastName: "Doe" })
          .then((data) => pushingVal(data))
          .then(() =>
            Checker()
              .then((data) => console.log(`Ini Data: ${JSON.stringify(data)}`))
              .then(() =>
                console.log("Thank you for waiting and inputing data")
              )
          )
      )
      .then(() => console.log("Hitung Dua telah selesai"))
  )
  .then(() => console.log(JSON.stringify(arr_tampung) + " :)"))
  .then(() =>
    console.log("This is hitungSatu, Succeed! " + JSON.stringify(arrsecond))
  );
