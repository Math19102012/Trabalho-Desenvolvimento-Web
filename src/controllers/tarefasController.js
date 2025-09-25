// Regras de cada rota (deixa o routes.js limpo)
import { pegarTodas, criar, atualizar, remover } from '../dados/bancoMemoria.js';

// GET /tarefas
export function listarTarefas(req, res) {
  res.json(pegarTodas());
}

// POST /tarefas
export function criarTarefa(req, res) {
  const { titulo, descricao, concluida } = req.body;
  if (!titulo || typeof titulo !== 'string') {
    return res.status(400).json({ erro: 'informe um titulo' });
  }
  const nova = criar({ titulo, descricao, concluida });
  res.status(201).json(nova);
}

// PUT /tarefas/:id
export function atualizarTarefa(req, res) {
  const id = Number.parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ erro: 'id inválido' });

  const permitido = ['titulo', 'descricao', 'concluida'];
  const dados = {};
  for (const k of permitido) if (Object.prototype.hasOwnProperty.call(req.body, k)) dados[k] = req.body[k];
  if (Object.keys(dados).length === 0) return res.status(400).json({ erro: 'nada para atualizar' });

  const alterada = atualizar(id, dados);
  if (!alterada) return res.status(404).json({ erro: 'tarefa não encontrada' });
  res.json(alterada);
}

// DELETE /tarefas/:id
export function apagarTarefa(req, res) {
  const id = Number.parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ erro: 'id inválido' });
  const ok = remover(id);
  if (!ok) return res.status(404).json({ erro: 'tarefa não encontrada' });
  res.status(204).send();
}
