const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const { Book, validate } = require("../models/book");

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let book = new Book({
    name: req.body.name,
    description: req.body.description,
    fulldetails: req.body.fulldetails ? req.body.fulldetails : ""
  });
  book = await book.save();
  res.send(book);
});

module.exports = router;
