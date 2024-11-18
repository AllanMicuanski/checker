const express = require("express");
const search = require("./checker");

const app = express();

const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello, I'm working :D");
});

app.get("/search", search);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
