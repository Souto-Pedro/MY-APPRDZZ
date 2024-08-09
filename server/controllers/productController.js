const Product = require("../models/Product");

// Criar um novo produto
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar todos os produtos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um produto por ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Produto não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um produto
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.update(req.body);
      res.json(product);
    } else {
      res.status(404).json({ message: "Produto não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar um produto
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.json({ message: "Produto deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Produto não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
