const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
  },
);



//const Book = mongoose.model('Book', BookSchema);
module.exports = Book = mongoose.model("book",BookSchema)