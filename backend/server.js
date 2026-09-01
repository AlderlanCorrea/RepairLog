const express = require('express');
const cors = require('cors');
const clientesRoutes = require('./routes/clientes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuarios', clientesRoutes);

app.get('/', async (req, res) => {
  res.json({ ok: true, mensagem: 'API do RepairLog funcionando' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});