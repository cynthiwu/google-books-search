const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
// title of the book as returned by Google API
  title: {
    type: String,
    required: true
  },
// author(s) of the book as returned by Google API
  authors: {
    type: [String],
    default: ""
  },
// description of the book as returned by Google API
  description: {
    type: String,
    default: ""
  },
// the book's thumbnail image as returned by Google API
  image: {
    type: String,
    default: ""
  },
  // the book's information of link as returned by Google API
  link: {
    type: String,
    default: "",
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;