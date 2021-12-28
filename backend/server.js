var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
const bookRoute = require("./routes/book.routes");
const db = require("./models");

const corsOptions = {
  origin: "http://localhost:8081",
};

const bootstrap = async () => {
  app.use(cors(corsOptions));
  app.use(bodyParser.json({ type: "application/*+json" }));
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  app.use(cors());

  await db.dbConnect();

  // Static directory path
  app.use(
    express.static(path.join(__dirname, "dist/angular-mean-crud-tutorial"))
  );

  // API root
  app.use("/api", bookRoute);

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
