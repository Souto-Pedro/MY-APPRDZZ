const Customer = require("../models/Customer");

// Criar um novo cliente
exports.createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar todos os clientes
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um cliente por ID
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ message: "Cliente não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um cliente
exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (customer) {
      await customer.update(req.body);
      res.json(customer);
    } else {
      res.status(404).json({ message: "Cliente não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar um cliente
exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (customer) {
      await customer.destroy();
      res.json({ message: "Cliente deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Cliente não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
