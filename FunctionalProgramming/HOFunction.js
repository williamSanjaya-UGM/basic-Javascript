var animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "Fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "Fish" },
];

var isDog = function (animal) {
  return animal.species === "dog";
};

var isnotDog = function (animal) {
  return animal.species !== "dog";
};

var dogs = animals.filter(isDog);
console.log(dogs);
var nodogs = animals.filter(isnotDog);
console.log(nodogs);
