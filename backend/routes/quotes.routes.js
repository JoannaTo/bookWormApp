const { json } = require("body-parser");
const express = require("express");

const quoteRoute = express.Router();

// Add Quote
quoteRoute.route("/quote").post(async (req, res) => {
  console.log(req.body);
  const quote = await process.db.Quote.create(req.body);
  if (quote) {
    return res.json(quote);
  }
  return res.status(500).send("There was some error");
});

// Get Quote
quoteRoute.route("/quote/:id").get(async (req, res) => {
  const quote = await process.db.Quote.findByPk(req.params.id);
  return res.json(quote);
});

// Get all quote
quoteRoute.route("/quote").get(async (req, res) => {
  const quotes = await process.db.Quote.findAll();
  return res.json(quotes);
});

module.exports = quoteRoute;
