const express = require('express');
const db = require('../data/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuarios');
    res.json({ ok: true, dados: rows });
  } catch (error) {
    res.status(500).json({ ok: false, erro: error.message });
  }
});

router.post('/', async (req, res) => {
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

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, aparelho, descricao, status } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE usuarios SET nome = ?, email = ?, telefone = ?, aparelho = ?, descricao = ?, status = ? WHERE id = ?',
      [nome, email, telefone, aparelho, descricao, status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ ok: false, erro: 'Usuário não encontrado' });
    }

    res.json({ ok: true, mensagem: 'Usuário atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ ok: false, erro: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query(
      'DELETE FROM usuarios WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ ok: false, erro: 'Usuário não encontrado' });
    }

    res.json({ ok: true, mensagem: 'Usuário removido com sucesso' });
  } catch (error) {
    res.status(500).json({ ok: false, erro: error.message });
  }
});

module.exports = router;