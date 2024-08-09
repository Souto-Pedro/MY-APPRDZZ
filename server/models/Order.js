const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Product = require("./Product");
const Customer = require("./Customer");

const Order = sequelize.define(
  "Order",
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false, // Quantidade não pode ser nula
    },
  },
  {
    timestamps: true, // Adiciona campos de 'createdAt' e 'updatedAt'
  }
);

// Relacionamento: Um pedido pertence a um produto
Order.belongsTo(Product, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

// Relacionamento: Um pedido pertence a um cliente
Order.belongsTo(Customer, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

module.exports = Order;
