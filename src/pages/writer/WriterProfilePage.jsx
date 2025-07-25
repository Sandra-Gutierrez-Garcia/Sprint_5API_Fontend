import React from "react";
import { useNavigate } from "react-router-dom";

// Componentes
import Header from '../../components/Header';
import ProfileCard from '../../components/ProfileCard';
import BookCard from '../../components/BookCard';

// Estilos
import '../../styles/writer/HomePage.css';

// Utils
import { getCurrentUser } from '../../utils/user/userStorage';
import { getWritersFromLocalStorage } from '../../utils/writer/writerStorage';
import { GENRES } from '../../utils/book/bookUtils';

function WriterProfilePage() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const writers = getWritersFromLocalStorage();
  const writerProfile = writers.find(w => w.username === user?.username);

  // Filtrar solo los libros creados por este escritor
  const allBooks = JSON.parse(localStorage.getItem('books') || '[]');
  const writerBooks = allBooks.filter(b => b.author === user?.username);

  if (!writerProfile) {
    return (
      <div className="profile-page-bg">
        <Header />
        <div style={{textAlign:'center', marginTop:'80px', color:'#e94e77', fontWeight:600, fontSize:'1.3rem'}}>
          No se encontró el perfil de escritor.<br />
          <button className="profile-header-btn" onClick={() => navigate('/crear-writer')}>Crear perfil de escritor</button>
        </div>
      </div>
    );
  }

  // Acciones del perfil
  const actions = (
    <>
      <button className="profile-save-btn" onClick={() => {/* lógica de edición */}}>Editar writer</button>
      <button className="profile-header-btn" style={{background:'#e74c3c', color:'#fff'}} onClick={() => {
        const updatedWriters = writers.filter(w => w.username !== user?.username);
        localStorage.setItem('writers', JSON.stringify(updatedWriters));
        navigate('/perfil');
      }}>Eliminar writer</button>
      <button className="profile-header-btn" onClick={() => navigate('/perfil')}>Volver perfil</button>
    </>
  );

  return (
    <div className="profile-page-bg">
      <Header />
      <ProfileCard
        title="Perfil de escritor"
        avatar={<span role="img" aria-label="avatar">📝</span>}
        fields={[{ label: "Usuario", value: writerProfile?.username || '-' }, { label: "Biografía", value: writerProfile?.bio || '-' }]}
        actions={actions}
      />
      <div className="registerpage-new">
        <section className="user-fav-books-section">
          <h2 className="fav-books-title">Libros escritos</h2>
          <button className="profile-header-btn" style={{background:'#27ae60', color:'#fff', marginBottom: '24px'}} onClick={() => navigate('/crear-libro')}>
            Crear libro
          </button>
          <div className="user-fav-books-list">
            {writerBooks.length === 0 && <p style={{color:'#888'}}>No has creado ningún libro aún.</p>}
            {writerBooks.map(book => (
              <BookCard
                key={book.id || book.title}
                cover={book.image || book.cover}
                title={book.title}
                author={book.author}
                description={book.description || ""}
                onEdit={() => navigate(`/book/edit/${book.id}`)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default WriterProfilePage;
