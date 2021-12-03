const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/../dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/horoscopes", (req, res) => {
  const sign = req.body.data;

  axios
    .post(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`)
    .then((r) => {
      res.send(r.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
