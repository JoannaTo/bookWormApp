const { json } = require("body-parser");
const express = require("express");

const bookRoute = express.Router();

// Add Book
bookRoute.route("/book").post(async (req, res) => {
  console.log(req.body);
  const book = await process.db.Book.create(req.body);
  if (book) {
    return res.json(book);
  }
  return res.status(500).send("There was some error");
});

// Get all Book
bookRoute.route("/book").get(async (req, res) => {
  const books = await process.db.Book.findAll();
  return res.json(books);
});

// Get Book
bookRoute.route("/book/:id").get(async (req, res) => {
  const book = await process.db.Book.findByPk(req.params.id);
  return res.json(book);
});

// Update Book
bookRoute.route("/book/:id").patch(async (req, res, next) => {
  await process.db.Book.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  const book = await process.db.Book.findByPk(req.params.id);
  return res.json(book);
});

// Delete Book
bookRoute.route("/book/:id").delete(async (req, res, next) => {
  await process.db.Book.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.send("ok");
});

module.exports = bookRoute;
