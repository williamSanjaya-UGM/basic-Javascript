const mysql = require("mysql");

function connectToDatabase(config) {
  return new Promise(function (resolve, reject) {
    const connection = mysql.createConnection(config);

    connection.connect(function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(connection);
    });
  });
}

connectToDatabase({
  host: "localost",
  user: "root",
  password: "",
  database: "chatroom",
})
  .then((conn) => {
    console.log("Connection succesfull");
    conn.end();
  })
  .catch((err) => {
    console.log("There was an error connecting to the database");
    console.log(err.message);
  });
