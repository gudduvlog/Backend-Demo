const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hey hello, I am working fine");
});

app.get("/users", (req, res) => {
  res.send("This is users endpoint");
});

app.listen("3000", () => {
  console.log("App is running ...");
});
