# API de Lista de Tarefas (CRUD) — Node.js + Express

Projeto simples para **criar, listar, atualizar e apagar** tarefas.  
Armazenamento **em memória** (sem banco). Comunicação via **JSON**.

---

## ✅ Pré-requisitos
- **Node.js** 16+  
- **Postman** (para testar e tirar os prints)

---

## ▶️ Como rodar
```bash
npm install
npm start
```
Servidor em: `http://localhost:3000`

---

## 📡 Rotas da API (4 exigidas)
- **GET** `/tarefas` → lista todas as tarefas  
- **POST** `/tarefas` → cria uma nova tarefa  
- **PUT** `/tarefas/:id` → atualiza uma tarefa existente  
- **DELETE** `/tarefas/:id` → apaga uma tarefa existente  

> Observação: **não** há `GET /tarefas/:id` neste projeto (atende ao pedido do professor).

---

## 🧾 Exemplos de JSON

### Criar (POST /tarefas)
```json
{
  "titulo": "Estudar Node",
  "descricao": "Express",
  "concluida": false
}
```

### Atualizar (PUT /tarefas/:id)
```json
{
  "concluida": true
}
```

---

## 🧪 Como testar no Postman (e tirar os 4 prints)
1. **POST** `http://localhost:3000/tarefas`  
   - Body → **raw** → **JSON** (usar exemplo acima)  
   - Esperado: **201 Created** com o objeto da tarefa (anote o **id**)

2. **GET** `http://localhost:3000/tarefas`  
   - Esperado: **200 OK** com um **array** contendo a tarefa criada

3. **PUT** `http://localhost:3000/tarefas/:id`  
   - Troque `:id` pelo id retornado no POST  
   - Body → **raw** → **JSON** (usar exemplo acima)  
   - Esperado: **200 OK** com a tarefa **atualizada**

4. **DELETE** `http://localhost:3000/tarefas/:id`  
   - Use o mesmo id  
   - Esperado: **204 No Content**

> Salve os prints em **`/prints`** com estes nomes:  
> `post_tarefas.png`, `get_tarefas.png`, `put_tarefas.png`, `delete_tarefas.png`.

---

## 📂 Estrutura de pastas
```
/
├─ postman/
│  └─ Lista de Tarefas (4 rotas).postman_collection.json
├─ prints/                  # coloque aqui os 4 prints do Postman
├─ src/
│  ├─ controllers/
│  │  └─ tarefasController.js
│  ├─ dados/
│  │  └─ bancoMemoria.js     # “banco” em memória (array)
│  ├─ app.js
│  ├─ routes.js
│  └─ server.js
├─ package.json
└─ README.md
```

---

## ℹ️ Observações
- Os dados ficam **só em memória**; ao reiniciar o servidor, tudo é apagado.  
- Em **POST** e **PUT**, use `Content-Type: application/json`.  
- Se **GET /tarefas** voltar `[]`, faça o **POST** novamente (provavelmente o servidor reiniciou).

---

## 📚 Referências
- Express: <https://expressjs.com/>  
- `.gitignore`: <https://www.toptal.com/developers/gitignore>
