# API Lista de Tarefas (CRUD) 

Projeto simples para **criar, listar, atualizar e apagar** tarefas.  
Armazenamento **em memória** (sem banco de dado), a comunicação entre cliente e servidor é via **JSON**.

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


---

## 📡 Rotas da API
- **GET** `/tarefas` → lista todas as tarefas  
- **POST** `/tarefas` → cria uma nova tarefa  
- **PUT** `/tarefas/:id` → atualiza uma tarefa existente  
- **DELETE** `/tarefas/:id` → apaga uma tarefa existente  

---

## 🧾 Exemplos de JSON

### Criar (POST /tarefas)
```json
{
  "titulo": "Trabalho - Desenvolvimento Web",
  "descricao": "Lista de Tarefas",
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

## 🧪 Como testar no Postman
1. **POST** `http://localhost:3000/tarefas`  
   - Body → **raw** → **JSON** (usar exemplo acima)  
   - Esperado: **201 Created** 

2. **GET** `http://localhost:3000/tarefas`  
   - Esperado: **200 OK** com um **array** 

3. **PUT** `http://localhost:3000/tarefas/:id`  
   - Troque `:id` pelo id retornado no **POST**  
   - Body → **raw** → **JSON** 
   - Esperado: **200 OK** com a tarefa **atualizada**

4. **DELETE** `http://localhost:3000/tarefas/:id`  
   - Use o mesmo id  
   - Esperado: **204 No Content**

> Salve os prints em **`/prints`** com estes nomes:  

---

## 📂 Estrutura de pastas
```
/
├─ postman/
│  └─ Lista de Tarefas.json
├─ prints/                 
├─ src/
│  ├─ controllers/
│  │  └─ tarefasController.js
│  ├─ dados/
│  │  └─ bancoMemoria.js    
│  ├─ app.js
│  ├─ routes.js
│  └─ server.js
├─ package.json
└─ README.md
```

---

## ℹ️ Observações
- Os dados ficam **só em memória**, se o servidor for reiniciado tudo é apagado.  
- Se **GET /tarefas** voltar `[]`, faça o **POST** novamente (provavelmente o servidor reiniciou).
