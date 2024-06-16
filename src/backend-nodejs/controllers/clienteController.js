const { Cliente } = require("../models/Cliente");

const clienteController = {
  create: async (req, res) => {
    try {
      const cliente = {
        nome: req.body.nome,
        telefone: req.body.telefone,
        local: req.body.local
      };
      const response = await Cliente.create(cliente);
      res.status(201).json({ response, msg: "Cliente cadastrado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao cadastrar cliente." });
    }
  },
  getAll: async (req, res) => {
    try {
      const clientes = await Cliente.find();
      res.json(clientes);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao buscar clientes." });
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const cliente = await Cliente.findById(id);
      if (!cliente) {
        res.status(404).json({ msg: "Cliente não encontrado!" });
        return;
      }
      res.json(cliente);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao buscar cliente." });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const cliente = await Cliente.findById(id);
      if (!cliente) {
        res.status(404).json({ msg: "Cliente não encontrado!" });
        return;
      }
      await Cliente.findByIdAndDelete(id);
      res.status(200).json({ msg: "Cliente excluído com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao excluir cliente." });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const cliente = {
        nome: req.body.nome,
        telefone: req.body.telefone,
        local: req.body.local
      };
      const updatedCliente = await Cliente.findByIdAndUpdate(id, cliente, { new: true });
      if (!updatedCliente) {
        res.status(404).json({ msg: "Cliente não encontrado!" });
        return;
      }
      res.status(200).json({ updatedCliente, msg: "Cliente atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao atualizar cliente." });
    }
  }
};

module.exports = clienteController;
