require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// Importando rotas de usuários
const userRoutes = require("./routes/userRoutes");

// Usando as rotas de usuários
app.use("/user", userRoutes);

// Rota aberta para retornar todos os usuários
app.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

// Credenciais
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.jhgabfv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Conectado ao banco de dados e rodando na porta 3000");
    });
  })
  .catch((err) => console.log(err));
