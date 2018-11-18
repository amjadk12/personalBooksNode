const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true
  },
  description: {
    type: String,
    minlength: 10,
    maxlength: 250
  }
});

const Book = mongoose.model("books", bookSchema);

exports.Book = Book;
