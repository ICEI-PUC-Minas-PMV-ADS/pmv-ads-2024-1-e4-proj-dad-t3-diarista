const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para criar um novo cliente
router.post('/clientes', clienteController.create);

// Rota para obter todos os clientes
router.get('/clientes', clienteController.getAll);

// Rota para obter um cliente específico pelo ID
router.get('/clientes/:id', clienteController.get);

// Rota para atualizar um cliente pelo ID
router.put('/clientes/:id', clienteController.update);

// Rota para excluir um cliente pelo ID
router.delete('/clientes/:id', clienteController.delete);

module.exports = router;
