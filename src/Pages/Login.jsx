import React, { useState } from "react";
import './Css/Login.css'


const LoginForm = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.user && formData.password) {
      setLoggedIn(true); 
    } else {
      alert("Ingresa usuario y contraseña");
    }
  };

  return (
    <>
      <div><h1>Inicio de Sesión</h1></div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={formData.user}
          onChange={(e) => setFormData({ ...formData, user: e.target.value })}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};

export default LoginForm;
