const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.get("/", async (req, res) => {
  return res.send("Hello");
});

app.listen(port, () => {
  console.log("Running");
});
