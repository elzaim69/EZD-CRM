const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

const customerSchema = new mongoose.Schema({
  name: String,
  company: String,
  email: String,
  phone: String,
  address: String,
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

const Customer = mongoose.model("Customer", customerSchema);

app.get("/", (req, res) => {
  res.send("Repairpoint24 CRM Backend läuft.");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
