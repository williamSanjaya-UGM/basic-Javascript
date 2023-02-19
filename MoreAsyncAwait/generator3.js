function* createUniqueRandomGenerator(array) {
  const available = array;

  while (available.length !== 0) {
    const randomIndex = Math.floor(Math.random() * available.length);
    const value = available[randomIndex];

    //Remove the used value from the list of available values
    available.splice(randomIndex, 1);

    yield value;
  }
}

const names = ["Dom", "Shelly", "Timmy", "Mario"];
const uniqueName = createUniqueRandomGenerator(names);

for (const name of uniqueName) {
  console.log(name);
}
