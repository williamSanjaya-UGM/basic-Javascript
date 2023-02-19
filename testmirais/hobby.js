function findAllHobbyists(hobby, hobbies) {
  for (var props in hobbies) {
    let choice = hobbies[props].filter((i) => i === hobby).map((i) => i);
    console.log(choice);
    // return choice;
  }
}

var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"],
};

console.log(findAllHobbyists("Yoga", hobbies));
