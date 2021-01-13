import React, { useState, useEffect } from "react";
import api from "./services/api";

import Header from "./components/Header";

import "./App.css";
import BackgroundImage from "./assets/jordans.jpg";

/**
 * Componente
 * Propiedade
 * estado & imutabilidade
 */

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post("projects", {
      title: `Novo projeto ${Date.now()}`,
      owner: "Lucas Barroso",
    });

    const project = response.data;

    setProjects([...projects, project]);

    localStorage.setItem("projects", JSON.stringify(projects));

    console.log(projects);
  }

  const handleDeleteProject = () => {
    setProjects([]);
  };

  const handleBackupProject = () => {
    const projectsBackup = JSON.parse(localStorage.getItem("projects"));

    setProjects(projectsBackup);
  };

  return (
    <>
      <Header title="Projects" />

      <img src={BackgroundImage} alt="jordans" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>

      <button type="button" onClick={handleDeleteProject}>
        Deletar projetos
      </button>

      <button type="button" onClick={handleBackupProject}>
        Backup projetos
      </button>
    </>
  );
}

export default App;
