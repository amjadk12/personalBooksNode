const mongoose = require("mongoose");
const Joi = require("joi");

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
    maxlength: 255,
    required: true
  },
  fulldetails: {
    type: String,
    minlength: 20,
    maxlength: 2000
  }
});

const Book = mongoose.model("books", bookSchema);

function validateBook(book) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    description: Joi.string()
      .min(5)
      .max(255)
      .required(),
    fulldetails: Joi.string()
      .min(20)
      .max(2000)
  };

  return Joi.validate(book, schema);
}

exports.validate = validateBook;
exports.Book = Book;
