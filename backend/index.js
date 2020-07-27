const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/formdata";
const form = require("./models/form");
const db = mongoose.connection;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
db.once("open", (_) => {
  console.log("Database connected", url);
});
db.on("error", (err) => {
  console.error("connection error", err);
});

var cors = require("cors");
const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/formreceiver", (req, res) => {
  async function saveForm() {
    const formData = new form(req.query);
    const doc = await formData.save();
    res.send('form entry success', doc)
  } 
  saveForm().catch((error) => {
    res.send(error)
  });
});

app.listen(4000);
