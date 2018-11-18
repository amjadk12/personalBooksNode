const express = require("express");
const app = express();
const config = require("config");

app.get("env");
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
const port = process.env.PORT || 777;

app.listen(port, () => {
  console.log(`Listing to port ${port}...`);
});

// module.exports = server;
// app.get("/", function(req, res) {
//   res.send("now I can start wring my books" + process.env.NODE_ENV);
// });
// app.get("/book1", function(req, res) {
//   res.send(
//     `start wring my book - I :
//     PORT: ${app.get("env")}
//     Application name: ${config.get("name")}
//     App Mail: ${config.get("mail.host")}
//   `
//   );
// });
// app.get("/book2", function(req, res) {
//   res.send("start wring my book - II");
// });
