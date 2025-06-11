// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Importar createRoot
import './index.css'; // Tailwind CSS se configurará aquí
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container); // Crear una raíz

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si quieres medir el rendimiento en tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envíalo a un punto de análisis.
reportWebVitals();
