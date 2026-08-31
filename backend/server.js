const express = require('express');
const db = require('./data/db');

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuarios');
    res.json({ ok: true, dados: rows });
  } catch (error) {
    res.status(500).json({ ok: false, erro: error.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});