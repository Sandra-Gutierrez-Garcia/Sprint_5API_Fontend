import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Form.css";
import { getUsersFromLocalStorage, setCurrentUser } from "../utils/userStorage";

function LoginPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const username = form[0].value;
    const password = form[1].value;
    const users = getUsersFromLocalStorage();
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setCurrentUser(found);
      setSuccess(true);
      setError("");
      form.reset();
      navigate("/perfil"); // Redirige al perfil tras login exitoso
    } else {
      setError("Usuario o contraseña incorrectos");
      setSuccess(false);
    }
  }

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
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            className="input"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input"
            required
          />
          <button type="submit" className="btn">
            Entrar
          </button>
        </form>
        {success && (
          <p
            style={{
              color: "#4a3c8c",
              marginTop: "18px",
              fontWeight: "600",
            }}
          >
            ¡Login exitoso! Bienvenido.
          </p>
        )}
        {error && (
          <p
            style={{
              color: "#e94e77",
              marginTop: "18px",
              fontWeight: "600",
            }}
          >
            {error}
          </p>
        )}
      </section>
    </div>
  );
}

export default LoginPage;
