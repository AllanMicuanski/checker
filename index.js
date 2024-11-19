const express = require("express");
const search = require("./checker");
const cors = require("cors");

const app = express();

const port = process.env.port || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, I'm working :D");
});

app.get("/search", search);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
