const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let users = [];

// Parte 1 e 2 : Rota para envio de um novo usuário
app.post('/users', (req, res) => {
  const { nome, idade, cargo, senha } = req.body;

  if (!nome || !idade || !cargo || !senha) {
    return res.status(406).json({ mensagem: 'Está faltando dados para concluir a operação' });
  }

  if (idade < 21) {
    return res.status(400).json({ mensagem: 'Usuário não possui idade suficiente' });
  }

  if (cargo !== 'líder') {
    return res.status(403).json({ mensagem: 'Acesso negado. Cargo inválido' });
  }

  const user = { id: users.length + 1, nome, idade, cargo, senha };
  users.push(user);

  return res.status(200).json({ mensagem: 'Criado com sucesso' });
});

// Parte 1 e 2 : Rota para deletar um usuário
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(406).json({ mensagem: 'Está faltando dados para concluir a operação' });
  }

  users = users.filter(user => user.id !== parseInt(id));

  return res.status(200).json({ mensagem: 'Deletado com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

