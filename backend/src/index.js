const express = require("express");

const app = express();

app.use(express.json());

/**
 *MÉTODOS HTTP:
 *
 *GET: busca informações do back-end
 *POST: cria informações no back-end
 *PUT: alterar uma indormação no back-end
 *DELETE: deleta informações no back-end
 *
 */

/**
 *Tipos de parâmetros:
 *
 *Query Params: Filtros e paginação
 *Route Params: Identificar recursos na hora de atualizar ou deletar
 *Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
 *
 */

app.get("/projects", (req, res) => {
  const { title, owner } = req.query;

  console.log(title);
  console.log(owner);

  return res.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  console.log(title);
  console.log(owner);

  return res.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);

  return res.json(["Projeto 4", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);

  return res.json(["Projeto 1", "Projeto 2"]);
});

app.listen(3333, () => {
  console.log("🚀 Back-end started!");
});
