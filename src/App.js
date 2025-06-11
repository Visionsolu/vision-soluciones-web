// src/App.js
import React from 'react';
import companyData from './data'; // Importa los datos de tu empresa
import './App.css'; // Mantenemos el CSS por defecto por ahora
import './index.css'; // Archivo de Tailwind CSS (a configurar)

function App() {
  // Puedes acceder a tus datos así:
  const companyName = companyData.general.name;
  const slogan = companyData.general.slogan;

  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Bienvenido a {companyName}!</h1>
        <p>{slogan}</p>
        <p>
          Hemos configurado tu proyecto React.
          <br />
          Toda la información de tu empresa está en <code>src/data.js</code>.
          <br />
          ¡Estamos listos para construir el diseño que amas!
        </p>
        <a
          className="App-link"
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header>
    </div>
  );
}

export default App;
