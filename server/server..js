const express = require("express");
const cors = require("cors");
const sequelize = require("./database");

const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", customerRoutes);
app.use("/api", orderRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
