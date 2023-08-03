const express = require("express");
const app = express();

const data = require("./data");

app.get("", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json(data);
});

// app.get("*", (req, res) => {
//   console.log("he tried to get something");
//   res.send("nononon");
//   res.end();
// });

app.listen(5001, () => {
  console.log("listening for requests");
});
