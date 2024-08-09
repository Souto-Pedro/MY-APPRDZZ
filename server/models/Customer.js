const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Customer = sequelize.define(
  "Customer",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Nome do cliente não pode ser nulo
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Email do cliente não pode ser nulo
      unique: true, // O email deve ser único
      validate: {
        isEmail: true, // Validação para verificar se é um email válido
      },
    },
  },
  {
    timestamps: true, // Adiciona campos de 'createdAt' e 'updatedAt'
  }
);

module.exports = Customer;
