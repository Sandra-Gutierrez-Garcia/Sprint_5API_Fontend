import React from "react";
import { useNavigate } from 'react-router-dom';

// Componentes
import Header from '../../components/Header';
import BookCard from '../../components/BookCard';
import ProfileCard from '../../components/ProfileCard';

// Estilos
import '../../styles/user/HomePage.css';

// Utils
import { getCurrentUser } from '../../utils/user/userStorage';
import { getWritersFromLocalStorage } from '../../utils/writer/writerStorage';
import { getFavoriteBooks } from '../../utils/book/favoriteBooks';

function UserProfilePage() {
  const user = getCurrentUser();
  const writers = getWritersFromLocalStorage();
  const writerProfile = writers.find(w => w.iduser === user?.id);
  const navigate = useNavigate();
  const favoriteBooks = getFavoriteBooks();

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
            <button className="profile-save-btn" onClick={() => navigate('/perfil/editar')}>Editar</button>
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
            {favoriteBooks.length === 0 && <div style={{color:'#888', fontSize:'1.05rem', padding:'18px 0'}}>No tienes libros guardados en favoritos.</div>}
            {favoriteBooks.map(book => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserProfilePage;
