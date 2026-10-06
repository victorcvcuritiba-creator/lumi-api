const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    nome: "LUMI API",
    status: "online",
    mensagem: "A LUMI está funcionando! 🚀"
  });
});

app.post("/chat", (req, res) => {
  const mensagem = req.body.mensagem;

  if (!mensagem) {
    return res.status(400).json({
      erro: "Envie uma mensagem."
    });
  }

  res.json({
    sucesso: true,
    resposta: "Recebi sua mensagem: " + mensagem
  });
});

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, "0.0.0.0", () => {
  console.log("🚀 LUMI API iniciada na porta " + PORTA);
});
