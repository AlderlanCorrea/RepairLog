const express = require('express');
const db = require('./data/db');

const app = express();
app.use(express.json());

app.post('/usuarios', async (req, res) => {
  const { nome, email, telefone, aparelho, descricao, status } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO usuarios (nome, email, telefone, aparelho, descricao, status) VALUES (?, ?, ?, ?, ?, ?)',
      [nome, email, telefone, aparelho, descricao, status]
    );

    res.json({ ok: true, id: result.insertId });
  } catch (error) {
    res.status(500).json({ ok: false, erro: error.message });
  }
});