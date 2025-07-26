import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header';
import '../../styles/user/RegisterPage.css';
import { handleRegisterSubmit } from '../../utils/user/authFormHandlers';

function RegisterPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="loginpage-new">
      <Header />
      <section className="top-book-banner">
        <div className="top-book-info">
          <h2>¡Bienvenido!</h2>
          <p className="top-book-title">
            Regístrate para descubrir libros y conectar con otros usuarios.
          </p>
        </div>
      </section>
      <section className="form-section">
        <h2 className="form-title">Crear cuenta</h2>
        <form className="form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px' }} onSubmit={e => handleRegisterSubmit(e, setSuccess, navigate, setError)}>
          <input type="text" placeholder="Usuario" className="input" required />
          <input type="email" placeholder="Email" className="input" required />
          <input type="password" placeholder="Contraseña" className="input" required />
          <button type="submit" className="btn" style={{ alignSelf: 'center', marginTop: '10px', minWidth: '140px' }}>Registrarse</button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '18px', fontWeight: '600' }}>{error}</p>}
        {success && (
          <p style={{ color: '#4a3c8c', marginTop: '18px', fontWeight: '600' }}>
            ¡Registro exitoso! Redirigiendo a login...
          </p>
        )}
      </section>
    </div>
  );
}

export default RegisterPage;
