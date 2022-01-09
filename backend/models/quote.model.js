module.exports = (sequelize, Sequelize) => {
  const Quote = sequelize.define("quotes", {
    author: {
      type: Sequelize.STRING,
    },
    quote: {
      type: Sequelize.STRING,
    },
  });

  return Book;
};
