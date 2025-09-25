import { Router } from 'express';
import {
  listarTarefas,
  criarTarefa,
  atualizarTarefa,
  apagarTarefa
} from './controllers/tarefasController.js';

const r = Router();

// 4 rotas 
r.get('/tarefas', listarTarefas);
r.post('/tarefas', criarTarefa);
r.put('/tarefas/:id', atualizarTarefa);
r.delete('/tarefas/:id', apagarTarefa);

export default r;
