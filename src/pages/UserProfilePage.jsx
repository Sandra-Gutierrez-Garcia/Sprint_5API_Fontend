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
      <div className="registerpage-new">
        <section className="profile-section">
          <h2 className="form-title">Datos del usuario</h2>
          <div className="profile-header-actions">
            <button className="profile-header-btn">Editar perfil</button>
            <button className="profile-header-btn logout">Cerrar sesión</button>
          </div>
          {user ? (
            <div className="form user-profile-card">
              <div className="user-avatar">
                <span role="img" aria-label="avatar">👤</span>
              </div>
              <div className="user-info">
                <div className="user-info-data">
                  <p><strong>Usuario:</strong> <span className="user-data">{user.username}</span></p>
                  <p><strong>Email:</strong> <span className="user-data">{user.email}</span></p>
                  <p><strong>Contraseña:</strong> <span className="user-data">******</span></p>
                </div>
              </div>
            </div>
          ) : (
            <p className="user-error">No hay usuario logueado.</p>
          )}
        </section>
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
