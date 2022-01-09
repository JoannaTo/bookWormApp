var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
const bookRoute = require("./routes/book.routes");
const db = require("./models");
const quoteRoute = require("./routes/quotes.routes");

const bootstrap = async () => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, OPTIONS, PATCH"
    );
    next();
  });

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  await db.dbConnect();

  // Static directory path
  app.use(
    express.static(path.join(__dirname, "dist/angular-mean-crud-tutorial"))
  );

  // API root
  app.use("/api", bookRoute);
  app.use("/api", quoteRoute);

  // PORT
  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log("Listening on port " + port);
  });

  // 404 Handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // Base Route
  app.get("/", (req, res) => {
    res.send("invaild endpoint");
  });

  // error handler
  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });
};

bootstrap().catch((err) => {
  console.log(err);
});
