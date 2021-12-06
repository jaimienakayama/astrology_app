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
  const qsSelect = "SELECT * FROM emails WHERE email=?";
  const qsInsert = "INSERT INTO emails (email) VALUES (?)";
  const errorMsg = "Oops! Something went wrong :(";
  db.query(qsSelect, [email], (err, r) => {
    if (err) {
      res.statusMessage = errorMsg;
      res.status(422).end();
    } else {
      if (r.length) {
        res.status(200).send("Yay! Your already subscribed 🎉");
      } else {
        db.query(qsInsert, [email], (err) => {
          err
            ? res.status(422).send()
            : res.status(201).send("Thanks for subscribing! 🥳");
        });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
