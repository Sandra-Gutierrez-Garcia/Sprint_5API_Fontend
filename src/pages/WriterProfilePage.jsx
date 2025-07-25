import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import BookCard from "../components/BookCard";
import { getCurrentUser } from "../utils/userStorage";
import { getWritersFromLocalStorage } from "../utils/writerStorage";
import { books } from "../utils/booksData";
import "../styles/Form.css";
import "../styles/HomePage.css";

function WriterProfilePage() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const writers = getWritersFromLocalStorage();
  const writerProfile = writers.find(w => w.username === user?.username);

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
          <div className="user-fav-books-list">
            <BookCard {...books[0]} />
            <BookCard {...books[1]} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default WriterProfilePage;
