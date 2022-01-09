const { Sequelize } = require("sequelize");

module.exports.dbConnect = async () => {
  const sequelize = new Sequelize("bookworm", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  const Book = sequelize.define(
    "books",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      imgPath: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.STRING,
      },
    },
    {
      // Other model options go here
    }
  );
  const Quote = sequelize.define(
    "quotes",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      author: {
        type: Sequelize.STRING,
      },
      quote: {
        type: Sequelize.STRING,
      },
    },
    {
      // Other model options go here
    }
  );

  await sequelize.sync();

  process.db = {
    Book: Book,
    Quote: Quote,
  };
};
