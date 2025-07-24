import React from "react";
import Header from "../components/Header";
import "../styles/Form.css";

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

      <section className="form-section">
        <h2 className="form-title">Iniciar sesión</h2>
        <form className="form">
          <input type="text" placeholder="Usuario" className="input" />
          <input type="password" placeholder="Contraseña" className="input" />
          <button type="submit" className="btn">
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
