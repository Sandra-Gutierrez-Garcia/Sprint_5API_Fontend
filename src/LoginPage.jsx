import React from "react";
import Header from "./Header";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="loginpage-new">
      <Header />
      <section className="top-book-banner">
        <div className="top-book-info">
          <h2>¡Bienvenido de nuevo!</h2>
          <p className="top-book-title">
            Inicia sesión para descubrir libros y conectar con otros usuarios.
          </p>
        </div>
      </section>

      <section className="login-form-section">
        <h2 className="form-title">Iniciar sesión</h2>
        <form className="login-form">
          <input
            type="text"
            placeholder="Usuario"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="login-input"
          />
          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
