import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Estilos globales (si tienes)
import App from './App'; // El componente principal de la app
import reportWebVitals from './reportWebVitals'; // Opcional

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
