const fetch = require("node-fetch");
const axios = require("axios");

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

// getData();

const getAxios = async () => {
  try {
    const response = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data[0])
      .catch((error) => console.log(error));
    const result = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data[1])
      .catch((error) => console.log(error));
    const [first, second] = await Promise.all([response, result]);

    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

getAxios();
