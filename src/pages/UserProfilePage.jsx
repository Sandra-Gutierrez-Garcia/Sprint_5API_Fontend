import React from "react";
import "../styles/Form.css";
import "../styles/HomePage.css";
import { getCurrentUser } from "../utils/userStorage";
import Header from "../components/Header";
import BookCard from "../components/BookCard";
import { books } from "../utils/booksData";

function UserProfilePage() {
  const user = getCurrentUser();

  return (
    <div className="profile-page-bg">
      <Header />
      <div className="user-profile-card-modern">
        <h2 className="profile-title">Configuración de cuenta</h2>
        <div className="profile-main-row">
          <div className="profile-avatar-block">
            <div className="user-avatar-modern">
              <span role="img" aria-label="avatar">👤</span>
            </div>
          </div>
          <div className="profile-info-block">
            <div className="profile-info-row">
              <div className="profile-info-label">Usuario</div>
              <div className="profile-info-value">{user?.username || '-'}</div>
            </div>
            <div className="profile-info-row">
              <div className="profile-info-label">Email</div>
              <div className="profile-info-value">{user?.email || '-'}</div>
            </div>
            <div className="profile-info-row">
              <div className="profile-info-label">Contraseña</div>
              <div className="profile-info-value">******</div>
            </div>
          </div>
        </div>
        <div className="profile-actions-row">
          <button className="profile-save-btn">Editar</button>
          <button className="profile-header-btn logout">Cerrar sesión</button>
          <a href="/crear-writer" className="profile-header-btn" style={{textDecoration:'none'}}>Crear perfil de escritor</a>
        </div>
      </div>
      <div className="registerpage-new">
        <section className="user-fav-books-section">
          <h2 className="fav-books-title">Libros preferidos</h2>
          <div className="user-fav-books-list">
            <BookCard {...books[0]} />
            <BookCard {...books[1]} />
            {/* Puedes agregar más BookCard aquí */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserProfilePage;
