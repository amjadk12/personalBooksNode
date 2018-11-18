const express = require("express");
const router = express.Router();
const { Book } = require("../models/book");

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

router.post("/", async (req, res) => {
  let book = new Book({
    name: req.body.name,
    description: req.body.description
  });
  book = await book.save();
  res.send(book);
});

module.exports = router;
