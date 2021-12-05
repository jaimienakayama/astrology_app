require("dotenv").config();
const express = require("express");
const axios = require("axios");
const db = require("../db/index.js");

const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + "/../dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/horoscopes", (req, res) => {
  const sign = req.body.data;
  axios
    .post(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`)
    .then((r) => res.status(200).send(r.data))
    .catch((err) => res.status(404).send(err));
});

app.post("/subscribe", (req, res) => {
  const email = req.body.data.toLowerCase();
  const qs = "INSERT IGNORE INTO emails (email) VALUES (?)";
  db.query(qs, [email], (err) => {
    err
      ? res.status(422).send("error inserting into db")
      : res.status(204).send("thanks for subscribing!");
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
