let starWars = new Map();
starWars.set("Luke", "Mark Hamil");
starWars.set("Han", "Harisson Ford");
let h = starWars.get("Han"); //will give the value
console.log(h);
//starWars.delete("Han"); //delete object Han
//starWars.clear(); //clear everyting

if (starWars.has("Han")) {
  //to test key name exist or not, still true even the value is false
  console.log("yes han");
}

console.log(starWars.size); //cek jumlah elemen

starWars.forEach((value, key) => {
  console.log(`${key}=${value}`);
});
