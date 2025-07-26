import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../utils/book/bookUtils";
import { addFavoriteBook, isBookFavorite, removeFavoriteBook } from "../../utils/book/favoriteBooks";
import { getCurrentUser } from '../../utils/user/userStorage';
import Header from "../../components/Header";
import "../../styles/book/BookPage.css";

const BookReadPage = () => {
  const { id } = useParams();
  const book = getBookById(id);
  const user = getCurrentUser();
  const [favorite, setFavorite] = useState(user && isBookFavorite(id));
  if (!book) return <div style={{padding:40, textAlign:'center'}}>Libro no encontrado.</div>;
  const handleFavorite = () => {
    if (!user) {
      alert('Debes registrarte o iniciar sesión para guardar libros en favoritos.');
      window.location.href = '/login';
      return;
    }
    if (favorite) {
      removeFavoriteBook(id);
      setFavorite(false);
    } else {
      addFavoriteBook(book);
      setFavorite(true);
    }
  };
  return (
    <>
      <Header />
      <div style={{maxWidth:600, margin:'32px auto', background:'#f8fafc', borderRadius:22, boxShadow:'0 2px 12px #e0e7fa', padding:'36px 32px'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:18, marginBottom:18}}>
          <img src={book.cover} alt={book.title} style={{width:120, height:160, objectFit:'cover', borderRadius:12, boxShadow:'0 1px 6px #e0e7fa'}} />
          <h2 style={{margin:0, fontWeight:700, color:'#2d3a4a'}}>{book.title}</h2>
          <div style={{color:'#4a3c8c', fontWeight:500, fontSize:'1.08rem'}}>Género: {Array.isArray(book.genres) ? book.genres.join(', ') : book.genre}</div>
        </div>
        <div style={{fontSize:'1.13rem', color:'#2d3a4a', lineHeight:1.8, background:'#fff', borderRadius:14, padding:'32px 22px', minHeight:220, marginBottom:24, boxShadow:'0 1px 6px #e0e7fa'}}>
          {book.description}
        </div>
        <button onClick={handleFavorite} style={{
          background: favorite ? '#c7e6d7' : '#f8fafc',
          color: favorite ? '#218c5a' : '#2d3a4a',
          border: '1.5px solid #e0e7fa',
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 600,
          fontSize: '1.08rem',
          boxShadow: '0 1px 4px #e0e7fa',
          transition: 'background 0.2s',
          letterSpacing: '0.01em',
          cursor: 'pointer',
          display: 'block',
          margin: '0 auto'
        }}>{favorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}</button>
      </div>
    </>
  );
};

export default BookReadPage;
