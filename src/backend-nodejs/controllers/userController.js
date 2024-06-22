const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); 
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

exports.getAllUserNames = async (req, res) => {
  try {
    const users = await User.find({}, "name"); 
    const userNames = users.map((user) => user.name); 
    res.status(200).json(userNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erro ao buscar nomes de usuários." });
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

  if (!name || !email || !password || !confirmPassword || !location) {
    return res
      .status(422)
      .json({ msg: "Por favor, preencha todos os campos obrigatórios" });
  }

  if (password !== confirmPassword) {
    return res.status(422).json({ msg: "As senhas não correspondem" });
  }

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res
        .status(422)
        .json({
          msg: "Este email já está sendo usado. Por favor, utilize outro email",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      location,
    });

    await user.save();

    return res.status(201).json({ msg: "Usuário criado com sucesso" });
  } catch (error) {
    console.error("Erro ao registrar o usuário:", error);
    return res
      .status(500)
      .json({
        msg: "Ocorreu um erro ao processar o seu pedido. Por favor, tente novamente mais tarde.",
      });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({ msg: "Email é obrigatório" });
  }

  if (!password) {
    return res.status(422).json({ msg: "Senha é obrigatório" });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(422).json({ msg: "Senha inválida" });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign({ id: user._id }, secret);

    return res
      .status(200)
      .json({ msg: "Autenticação autorizada com sucesso", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

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

exports.addTransaction = async (req, res) => {
  const { userId } = req.params;
  const { amount, type } = req.body;

  try {
    if (!userId || !amount || !type) {
      return res
        .status(422)
        .json({
          msg: "Por favor, forneça o ID do usuário, o valor da transação e o tipo.",
        });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }
    user.transactions.push({ amount, type });

    await user.save();

    return res
      .status(200)
      .json({ msg: "Transação adicionada com sucesso!", amountAdded: amount });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Erro ao adicionar transação.", error: error.message });
  }
};

exports.calculateTotalEntradas = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    let totalEntradas = 0;

    user.transactions.forEach((transaction) => {
      if (transaction.type === "entrada") {
        totalEntradas += transaction.amount;
      }
    });

    return res.status(200).json({ totalEntradas });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Erro ao calcular total de entradas." });
  }
};

exports.calculateBalance = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    let totalEntradas = 0;
    let totalSaidas = 0;

    user.transactions.forEach((transaction) => {
      if (transaction.type === "entrada") {
        totalEntradas += transaction.amount;
      } else if (transaction.type === "saida") {
        totalSaidas += transaction.amount;
      }
    });

    const saldo = totalEntradas - totalSaidas;

    return res.status(200).json({ totalEntradas, totalSaidas, saldo });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  }
};

exports.calculateTotal = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    let total = 0;

    user.transactions.forEach((transaction) => {
      if (transaction.type === "entrada") {
        total += transaction.amount;
      } else if (transaction.type === "saida") {
        total -= transaction.amount;
      }
    });

    return res.status(200).json({ total });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Erro ao calcular o total.", error: error.message });
  }
};

exports.calculateTotalSaidas = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    let totalSaidas = 0;

    user.transactions.forEach((transaction) => {
      if (transaction.type === "saida") {
        totalSaidas += transaction.amount;
      }
    });

    return res.status(200).json({ totalSaidas });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        msg: "Erro ao calcular o total de saídas.",
        error: error.message,
      });
  }
};
