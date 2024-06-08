const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const checkToken = require("../middlewares/checkToken");

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

module.exports = router;
