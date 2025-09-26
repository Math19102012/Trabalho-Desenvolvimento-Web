import express from 'express';
import rotas from './routes.js';

const app = express();

// Sem isso o body JSON não funciona
app.use(express.json());

// Rota para testar
app.get('/', (_, res) => res.json({ ok: true, dica: 'usar /tarefas' }));

// Rotas da API 
app.use(rotas);

// Erro 404
app.use((req, res) => res.status(404).json({ erro: 'rota não encontrada' }));

// Erro geral
app.use((err, req, res, next) => {
  console.error('erro geral:', err);
  res.status(500).json({ erro: 'erro no servidor' });
});

export default app;
