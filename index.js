const express = require("express");
const app = express();
const config = require("config");
const mongoose = require("mongoose");

// const db = null;
// try {
//   const db = mongoose.connect(
//     process.env.DB_CON,
//     { authMechanism: "ScramSHA1" },
//     { useNewUrlParser: true }
//   );
//   if (db) console.log("Connected to DB...");
// } catch (error) {
//   console.log(`Error :${error}`);
// }

app.get("env");
app.get("/", function(req, res) {
  res.send("now I can start wring my books" + process.env.NODE_ENV);
});
app.get("/book1", function(req, res) {
  res.send(
    `start wring my book - I : 
    PORT: ${app.get("env")} 
    Application name: ${config.get("name")}  
    App Mail: ${config.get("mail.host")}
  `
  );
});
app.get("/book2", function(req, res) {
  res.send("start wring my book - II");
});

const port = process.env.PORT || 777;

app.listen(port, () => {
  console.log(`Listing to port ${port}...`);
});
