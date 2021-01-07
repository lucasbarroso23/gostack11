import React from "react";

export default function header({ title, children }) {
  return (
    <header>
      <h1>{title}</h1>

      {children}
    </header>
  );
}
