import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";
import "../styles/HomePage.css";
import { getCurrentUser } from "../utils/userStorage";
import { getWritersFromLocalStorage } from "../utils/writerStorage";
import Header from "../components/Header";
import BookCard from "../components/BookCard";
import ProfileCard from "../components/ProfileCard";
import { books } from "../utils/booksData";

function WriterProfilePage() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const writers = getWritersFromLocalStorage();
  const writerProfile = writers.find(w => w.username === user?.username);
  const [showEdit, setShowEdit] = useState(false);

  function handleDeleteWriter() {
    const updatedWriters = writers.filter(w => w.username !== user?.username);
    localStorage.setItem('writers', JSON.stringify(updatedWriters));
    navigate('/perfil');
  }

  function handleEditWriter() {
    setShowEdit(true);
  }

  function handleBack() {
    navigate('/perfil');
  }

  return (
    <div className="profile-page-bg">
      <Header />
      <ProfileCard
        title="Perfil de escritor"
        avatar={<span role="img" aria-label="avatar">📝</span>}
        fields={[
          { label: "Usuario", value: writerProfile?.username || '-' },
          { label: "Biografía", value: writerProfile?.bio || '-' }
        ]}
        actions={
          <>
            <button className="profile-save-btn" onClick={handleEditWriter}>Editar writer</button>
            <button className="profile-header-btn" style={{background:'#e74c3c', color:'#fff'}} onClick={handleDeleteWriter}>Eliminar writer</button>
            <button className="profile-header-btn" onClick={handleBack}>Volver perfil</button>
          </>
        }
      />
      {/* Aquí podrías mostrar el formulario de edición si showEdit es true */}
      <div className="registerpage-new">
        <section className="user-fav-books-section">
          <h2 className="fav-books-title">Libros escritos</h2>
          <div className="user-fav-books-list">
            {/* Aquí puedes mostrar los libros escritos por el escritor */}
            <BookCard {...books[0]} />
            <BookCard {...books[1]} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default WriterProfilePage;
