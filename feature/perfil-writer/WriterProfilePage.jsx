import React from "react";
import "../../styles/Form.css";
import "../../styles/HomePage.css";
import { getCurrentUser } from "../../utils/userStorage";
import { getWritersFromLocalStorage } from "../../utils/writerStorage";
import Header from "../../components/Header";
import BookCard from "../../components/BookCard";
import ProfileCard from "../../components/ProfileCard";
import { books } from "../../utils/booksData";

function WriterProfilePage() {
  const user = getCurrentUser();
  const writers = getWritersFromLocalStorage();
  const writerProfile = writers.find(w => w.username === user?.username);

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
            <button className="profile-save-btn">Editar writer</button>
            <button className="profile-header-btn" style={{background:'#e74c3c', color:'#fff'}}>Eliminar writer</button>
            <button className="profile-header-btn">Volver perfil</button>
          </>
        }
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
