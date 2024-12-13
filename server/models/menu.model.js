const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  items: [itemSchema],
});

module.exports = mongoose.model("Menu", menuSchema);
