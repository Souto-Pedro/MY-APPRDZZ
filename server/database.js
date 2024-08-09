const Sequelize = require("sequelize");

// Create a new Sequelize instance
const sequelize = new Sequelize("db1", "root", "Coloque sua senha", {
  host: "localhost",
  dialect: "mysql",
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = sequelize;
