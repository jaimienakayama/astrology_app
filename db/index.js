const mysql = require("mysql2");
const { host, user, database } = require("../config.js");

const db = mysql.createConnection({
  host,
  user,
  database,
});

db.connect((err) => {
  err ? console.log(err) : console.log("successfully connected to db!");
});

module.exports = db;
