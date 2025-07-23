import React from "react";
import "./RegisterPage.css";
import Header from "./Header";

const RegisterPage = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="form-container">
        <h2>Registro</h2>
        <form>
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Registrarse</button>
        </form>
        <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
      </div>
    </div>
  );
};

export default RegisterPage;
