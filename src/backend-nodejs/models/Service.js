const mongoose = require("mongoose");

const { Schema } = mongoose;

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now 
  },
  localization: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  done: {
     type: Boolean,
     required: true
    },
  avaliation: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  },
   { timestamps: true});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = {Service,
  ServiceSchema,
};