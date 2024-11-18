const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");
const verificar = require("./checker");

const app = express();

const port = process.env.port || 3000;

app.get("/scrape", (req, res) => {
  scrapeLogic(res);
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.get("/verificar", verificar);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
