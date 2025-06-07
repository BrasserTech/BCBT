import React from "react";

export default function Principal() {
  return (
    <div className="app-container">
      <h1>🛠️ Gerador de Bots Automatizados</h1>
      <p>Crie e gerencie tarefas automatizadas com clique, teclado ou leitura de CSV.</p>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => alert("Funcionalidade: Criar novo bot")}>
          ➕ Criar novo bot
        </button>
      </div>

      <div style={{ marginTop: 40 }}>
        <h2>Bots existentes</h2>
        <ul>
          <li>
            Bot 1 - [Executar clique automático]
            <div>
              <button>Editar</button>
              <button>Remover</button>
            </div>
          </li>
          <li>
            Bot 2 - [Preencher formulário com dados CSV]
            <div>
              <button>Editar</button>
              <button>Remover</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
