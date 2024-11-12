import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css'; // Importa los estilos

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <div className="register-container">
      <h1>Registrar Usuario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "El nombre de usuario es obligatorio", minLength: { value: 3, message: "Debe tener al menos 3 caracteres" } })}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "El correo es obligatorio", pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "Correo no válido" } })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: "La contraseña es obligatoria", minLength: { value: 6, message: "Debe tener al menos 6 caracteres" } })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
