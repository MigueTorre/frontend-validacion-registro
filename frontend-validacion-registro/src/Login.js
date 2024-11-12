import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación

const Login = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Estado para mostrar el mensaje de error
  const [errorMessage, setErrorMessage] = useState('');

  // Maneja los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { username, password } = formData;

    // Verificación de credenciales
    if (username === 'root' && password === '1022933969') {
      alert('Login exitoso');
      // Redirige a la página principal o dashboard (si tienes esa ruta configurada)
      // history.push('/home'); // Esto solo funciona si usas react-router-dom y tienes configurada la ruta
    } else {
      setErrorMessage('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h1>INICIAR SESIÓN</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Mostrar mensaje de error si las credenciales son incorrectas */}
      {/* Enlace al formulario de registro */}
      <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
    </div>
  );
};

export default Login;
