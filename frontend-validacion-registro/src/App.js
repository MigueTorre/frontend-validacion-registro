import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar correctamente
import Login from './Login'; // Importa Login.js
import Register from './Register'; // Importa Register.js
import './App.css';

const App = () => {
  return (
    <Router> {/* Envolvemos toda la aplicación en BrowserRouter */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Ruta para el Login */}
          <Route path="/register" element={<Register />} /> {/* Ruta para el Register */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
