module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("books", {
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
      type: Sequelize.NUMBER,
    },
    status: {
      type: Sequelize.STRING,
    },
    comment: {
      type: Sequelize.STRING,
    },
  });

  return Book;
};
