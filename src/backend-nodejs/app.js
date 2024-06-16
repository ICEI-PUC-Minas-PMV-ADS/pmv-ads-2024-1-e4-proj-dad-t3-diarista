require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

const routes = require("./routes/router");
app.use("/api", routes);

// Adicione as rotas de clientes
const clienteRoutes = require("./routes/clienteRoutes");
app.use("/api", clienteRoutes);

// Credenciais do banco de dados
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const port = process.env.PORT || 3000;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.jhgabfv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Conectado ao banco de dados e rodando na porta ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
