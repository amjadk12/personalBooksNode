const express = require("express");
const config = require("config");
const app = express();

app.get("env");
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || 777;

app.listen(port, () => {
  console.log(`Listing to port ${port}...`);
});
