import React from "react";
import Header from "../components/Header";
import "../styles/Form.css";
import "../styles/HomePage.css";
import { getCurrentUser } from "../utils/userStorage";

function UserProfilePage() {
  const user = getCurrentUser();

  return (
    <div className="registerpage-new">
      <Header />
      <section className="top-book-banner">
        <div className="top-book-info">
          <h2>Perfil de usuario</h2>
          <p className="top-book-title">
            Aquí puedes ver y editar tu información personal.
          </p>
        </div>
      </section>
      <section className="form-section">
        <h2 className="form-title">Datos del usuario</h2>
        {user ? (
          <div className="form" style={{alignItems:'flex-start'}}>
            <p><strong>Usuario:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Contraseña:</strong> ******</p>
            {/* Aquí podrías añadir edición o más datos */}
          </div>
        ) : (
          <p style={{color:'#e94e77'}}>No hay usuario logueado.</p>
        )}
      </section>
    </div>
  );
}

export default UserProfilePage;
