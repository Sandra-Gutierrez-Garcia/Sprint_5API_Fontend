import React from "react";

// Componentes
import Header from "../components/Header";
import BookCard from "../components/BookCard";
import ProfileCard from "../components/ProfileCard";

// Estilos
import "../styles/Form.css";
import "../styles/HomePage.css";

// Utils
import { getCurrentUser } from "../utils/userStorage";
import { getWritersFromLocalStorage } from "../utils/writerStorage";
import { books } from "../utils/booksData";

function UserProfilePage() {
  const user = getCurrentUser();
  const writers = getWritersFromLocalStorage();
  const writerProfile = writers.find(w => w.username === user?.username);

  return (
    <div className="profile-page-bg">
      <Header />
      <ProfileCard
        title="Configuración de cuenta"
        avatar={<span role="img" aria-label="avatar">👤</span>}
        fields={[
          { label: "Usuario", value: user?.username || '-' },
          { label: "Email", value: user?.email || '-' },
          { label: "Contraseña", value: "******" }
        ]}
        actions={
          <>
            <button className="profile-save-btn">Editar</button>
            <button className="profile-header-btn logout">Cerrar sesión</button>
            {!writerProfile && (
              <a href="/crear-writer" className="profile-header-btn" style={{textDecoration:'none'}}>Crear perfil de escritor</a>
            )}
            {writerProfile && (
              <a href="/perfil-writer" className="profile-header-btn" style={{textDecoration:'none'}}>Ver perfil de escritor</a>
            )}
          </>
        }
      />
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
