const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find({}, "-password"); // Excluindo a senha da resposta
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error });
    }
  };

// Controlador para obter usuário por ID
exports.getUserById = async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id, "-password");

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
};

exports.registerUser = async (req, res) => {
  const { name, email, password, confirmPassword, location } = req.body;

  // Validar se todos os campos obrigatórios estão presentes
  if (!name || !email || !password || !confirmPassword || !location) {
    return res.status(422).json({ msg: "Por favor, preencha todos os campos obrigatórios" });
  }

  // Verificar se as senhas correspondem
  if (password !== confirmPassword) {
    return res.status(422).json({ msg: "As senhas não correspondem" });
  }

  try {
    // Verificar se o usuário já existe com o email fornecido
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(422).json({ msg: "Este email já está sendo usado. Por favor, utilize outro email" });
    }

    // Criar o hash da senha
    const hashedPassword = await bcrypt.hash(password, 12);

    // Criar o usuário
    const user = new User({
      name,
      email,
      password: hashedPassword,
      location,
    });

    // Salvar o usuário no banco de dados
    await user.save();
    
    return res.status(201).json({ msg: "Usuário criado com sucesso" });
  } catch (error) {
    console.error("Erro ao registrar o usuário:", error);
    return res.status(500).json({ msg: "Ocorreu um erro ao processar o seu pedido. Por favor, tente novamente mais tarde." });
  }
};



// Controlador para login de usuário
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({ msg: "Email é obrigatório" });
  }

  if (!password) {
    return res.status(422).json({ msg: "Senha é obrigatório" });
  }

  // Checando se o usuário existe
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }

  // Checando a senha
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(422).json({ msg: "Senha inválida" });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign({ id: user._id }, secret);

    return res.status(200).json({ msg: "Autenticação autorizada com sucesso", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  }
};

// Controlador para deletar usuário
exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  // Verificando se o usuário existe
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  try {
    await User.deleteOne({ _id: id });
    return res.status(200).json({ msg: "Usuário deletado com sucesso!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  }
};
