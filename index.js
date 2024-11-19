const express = require("express");
const search = require("./checker");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

// Configurações
const port = process.env.PORT || 3000;
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });

// Middlewares
app.use(helmet());
app.use(cors({ origin: "https://simple-request-frontend.vercel.app" }));
app.use(limiter);

// Função para validar URLs
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

// Rotas
app.get("/", (req, res) => {
  res.send("Hello, I'm working :D");
});

// Rota de busca com validação de URL
app.get(
  "/search",
  (req, res, next) => {
    const { url } = req.query;
    if (!url || !isValidUrl(url)) {
      return res.status(400).json({ error: "URL inválida!" });
    }
    next();
  },
  search
);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
