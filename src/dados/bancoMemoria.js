// Reiniciar apaga tudo
let proximoId = 1;
const lista = [];

export function pegarTodas() {
  return lista;
}

export function criar({ titulo, descricao = '', concluida = false }) {
  const agora = new Date().toISOString();
  const t = { id: proximoId++, titulo, descricao, concluida: Boolean(concluida), criadaEm: agora, atualizadaEm: agora };
  lista.push(t);
  return t;
}

export function atualizar(id, dados) {
  const i = lista.findIndex(t => t.id === id);
  if (i === -1) return null;
  const agora = new Date().toISOString();
  lista[i] = { ...lista[i], ...dados, id, atualizadaEm: agora };
  return lista[i];
}

export function remover(id) {
  const i = lista.findIndex(t => t.id === id);
  if (i === -1) return false;
  lista.splice(i, 1);
  return true;
}
