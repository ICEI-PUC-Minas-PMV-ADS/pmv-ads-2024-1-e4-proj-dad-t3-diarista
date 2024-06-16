const mongoose = require("mongoose");

const { Schema } = mongoose;

const ClienteSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  local: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = { Cliente, ClienteSchema };
