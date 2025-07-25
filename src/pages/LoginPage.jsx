import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Form.css";
import { handleLoginSubmit } from "../utils/authFormHandlers";

function LoginPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

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
        <form className="form" onSubmit={e => handleLoginSubmit(e, setError, setSuccess, navigate)}>
          <input type="text" placeholder="Usuario" className="input" required />
          <input type="password" placeholder="Contraseña" className="input" required />
          <button type="submit" className="btn">Iniciar sesión</button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '18px', fontWeight: '600' }}>{error}</p>}
      </section>
    </div>
  );
}

export default LoginPage;
