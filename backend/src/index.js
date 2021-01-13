const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require("uuidv4");

const app = express();
app.use(cors());
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

/*
 *Middleware:
 *
 * Interceptador de requisições que pode interrromper totalmente a requisição ou alterar dados da requisição *
 *
 */

const projects = [];

function logRequests(req, res, next) {
  const { method, url } = req;

  const LogLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(LogLabel);

  next(); // prox middleware

  console.timeEnd(LogLabel);
}

function validateProjectId(req, res, next) {
  const { id } = req.params;

  if (!isUuid(id)) {
    return res.status(400).json({ error: "Invalid project ID" });
  }

  return next();
}

app.use(logRequests);
app.use("/projects/:id", validateProjectId);

app.get("/projects", (req, res) => {
  const { title } = req.query;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return res.json(results);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return res.json(project);
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: "Project not found" });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;
  return res.json(project);
});

app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.json({ error: "Project not found" });
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();
});

app.listen(3333, () => {
  console.log("🚀 Back-end started!");
});
