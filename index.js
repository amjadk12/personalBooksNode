const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("now I can start wring my books");
});
app.get("/book1", function(req, res) {
  res.send("start wring my book - I");
});
app.get("/book2", function(req, res) {
  res.send("start wring my book - II");
});

app.listen(777, () => {
  console.log("Listing to port 777...");
});
