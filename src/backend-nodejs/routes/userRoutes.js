const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const checkToken = require("../middlewares/checkToken");
// Rota para obter todos os nomes de usuários
router.get("/names", userController.getAllUserNames);

// Pega todos os usuários
router.get("/", userController.getAllUsers);

// Rota para obter usuário por ID (rota privada)
router.get("/:id", checkToken, userController.getUserById);

// Rota para registrar usuário
router.post("/auth/register", userController.registerUser);

// Rota para login de usuário
router.post("/auth/login", userController.loginUser);

// Rota para deletar usuário (sem token)
router.delete("/:id", userController.deleteUser);

// Rota para adicionar transação
router.post("/:userId/transactions", userController.addTransaction);

// Rota para calcular o saldo
router.get("/:userId/balance", userController.calculateBalance);

// Rota para calcular o total
router.get("/:userId/total", userController.calculateTotal);

// Rota para calcular o total das saídas
router.get("/:userId/total-saidas", userController.calculateTotalSaidas);

// Rota para calcular o total das entradas
router.get("/:userId/total-entradas", userController.calculateTotalEntradas);

module.exports = router;
