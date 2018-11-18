const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

module.exports = function() {
  app.get("env");
  const db = process.env.DB_CON;
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log(`Successfully conneted to db...`);
    });
};
