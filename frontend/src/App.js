import React from "react";

import Header from "./components/Header";

/**
 * Componente
 * Propiedade
 * estado
 */

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>lista1</li>
          <li>lista2</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>lista3</li>
          <li>lista4</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
