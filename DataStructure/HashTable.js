// const person = {};
// person["firstname"] = "bob";
// person["lastName"] = "bobby";
// console.log(person.firstname); //{firstname:'bob',lastName:'bobby'}

//HashTable is consist an array
function hashStringToInt(s, tableSize) {
  let hash = 17;
  for (let i = 0; i < s.length; i++) {
    hash = (hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

console.log("");

class HashTable {
  table = new Array(3);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    this.numItems++;
    //recompute loadFactor everytime you're doing numItems
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      //resize
      this.resize();
    }

    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) {
      return null;
    }
    return this.table[idx].find((x) => x[0] === key)[1];
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "Jim");
myTable.setItem("age", 5);
myTable.setItem("dob", "1/2/3");
console.log(myTable.table, myTable.table.length);
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
console.log(myTable.getItem("dob"));
