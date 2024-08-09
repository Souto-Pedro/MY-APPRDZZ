const Order = require("../models/Order");
const Product = require("../models/Product");
const Customer = require("../models/Customer");

// Criar um novo pedido
exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar todos os pedidos
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ include: [Product, Customer] });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um pedido por ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [Product, Customer],
    });
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: "Pedido não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um pedido
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      await order.update(req.body);
      res.json(order);
    } else {
      res.status(404).json({ message: "Pedido não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar um pedido
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      await order.destroy();
      res.json({ message: "Pedido deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Pedido não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
