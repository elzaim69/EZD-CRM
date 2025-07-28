const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  company: String,
  email: String,
  phone: String,
  address: String,
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Customer", customerSchema);
