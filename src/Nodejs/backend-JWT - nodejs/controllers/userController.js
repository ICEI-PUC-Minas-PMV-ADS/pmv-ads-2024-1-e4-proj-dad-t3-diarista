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

// Controlador para registrar usuário
exports.registerUser = async (req, res) => {
  const { name, email, password, confirmpassword, location } = req.body;

  if (!name) {
    return res.status(422).json({ msg: "Nome é obrigatório" });
  }

  if (!password) {
    return res.status(422).json({ msg: "Senha é obrigatório" });
  }

  if (password !== confirmpassword) {
    return res.status(422).json({ msg: "Senhas não conferem" });
  }

  // Checando se o usuário já existe (se foi fornecido um email)
  if (email) {
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ msg: "Por favor, utilize outro email" });
    }
  }

  // Criando a senha
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Criando o usuario
  const user = new User({
    name,
    email, // Pode ser undefined se não fornecido
    password: hashedPassword,
    location,
  });

  try {
    await user.save();
    return res.status(201).json({ msg: "Usuário criado com sucesso" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
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
