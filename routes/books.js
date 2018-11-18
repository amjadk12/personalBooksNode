const express = require("express");
const router = express.Router();
const { Book } = require("../models/book");

router.get("/", async (req, res) => {
  res.send("I am in");
  // const books = await Book.find();
  // res.send(books);
});

module.exports = router;
