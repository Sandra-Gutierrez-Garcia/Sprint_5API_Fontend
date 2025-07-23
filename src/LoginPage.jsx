import React from "react";
import "./LoginPage.css";
import Header from "./Header";

const LoginPage = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="form-container">
        <h2>Iniciar Sesión</h2>
        <form>
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Entrar</button>
        </form>
        <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
