// Async way
async function getHamburger(server, defaultBurger) {
  if (!(await server.hasBurgers())) {
    return defaultBurger;
  }

  let burgersEaten = getNumberOfEatenBurersToday();
  let maxBurgers = await server.getMaxNumberOfBurgersPerDay();

  if (burgersEaten < maxBurgers) {
    return server.loadBurger();
  }

  return defaultBurger;
}

// Promise then way tenary
let getHamburger = (server, defaultBurger) =>
  server
    .hasBurgers()
    .then((hasBurgers) =>
      !hasBurgers
        ? defaultBurger
        : server
            .getMaxNumberOfBurgersPerDay()
            .then((maxBurgers) =>
              getNumberOfEatenBurersToday() < maxBurgers
                ? server.loadBurger()
                : defaultBurger
            )
    );

// Promise than way if else
let getHamburger = (server, defaultBurger) =>
  server.hasBurgers().then((hasBurgers) => {
    if (!hasBurgers) {
      return defaultBurger;
    }

    return server.getMaxNumberOfBurgersPerDay().then((maxBurgers) => {
      if (getNumberOfEatenBurersToday() < maxBurgers) {
        return server.loadBurger();
      }
      return defaultBurger;
    });
  });

/** ***************************************************** */
//Second example
async function processAllUsers() {
  const sql = "SELECT id FROM users";
  const users = await db.query(sql, []);
  for (const user of users) {
    await processUser(user.id);
  }
}

function processAllUsers() {
  const sql = "SELECT id FROM users";
  return db
    .query(sql, [])
    .then((users) => waitForEach((user) => processUser(user.id), users));
}

// waitForEach function is a recursive function to replace the for of loop, and async await is trying to avoid this
const waitForEach = (processFunc, [head, ...tail]) =>
  !head
    ? Promise.resolve()
    : processFn(head).then(waitForEach(processFunc, tail));
