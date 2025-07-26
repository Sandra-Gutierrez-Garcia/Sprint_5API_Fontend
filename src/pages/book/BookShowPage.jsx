import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBookById } from "../../utils/book/bookUtils";
import { addFavoriteBook, isBookFavorite, removeFavoriteBook } from "../../utils/book/favoriteBooks";
import { getCurrentUser } from '../../utils/user/userStorage';
import Header from "../../components/Header";
import "../../styles/book/BookPage.css";

const BookShowPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = getBookById(id);
  const user = getCurrentUser();
  const [favorite, setFavorite] = useState(user && isBookFavorite(id));
  if (!book) return <div style={{padding:40, textAlign:'center'}}>Libro no encontrado.</div>;
  const handleFavorite = () => {
    if (!user) {
      alert('Debes registrarte o iniciar sesión para guardar libros en favoritos.');
      navigate('/login');
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
      <div style={{maxWidth:500, margin:'32px auto', background:'#fff', borderRadius:18, boxShadow:'0 2px 12px #e0e7fa', padding:'36px 32px'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:18, marginBottom:18}}>
          <img src={book.cover} alt={book.title} style={{width:140, height:180, objectFit:'cover', borderRadius:12, boxShadow:'0 1px 6px #e0e7fa'}} />
          <h2 style={{margin:0, fontWeight:700, color:'#2d3a4a'}}>{book.title}</h2>
          <div style={{color:'#4a3c8c', fontWeight:500, fontSize:'1.08rem'}}>Género: {Array.isArray(book.genres) ? book.genres.join(', ') : book.genre}</div>
          {book.status && (
            <div style={{color:'#888', fontWeight:500, fontSize:'1.01rem'}}>Estado: <span style={{ color: book.status === 'terminado' ? '#27ae60' : book.status === 'abandonado' ? '#e74c3c' : '#e67e22' }}>{book.status.charAt(0).toUpperCase() + book.status.slice(1)}</span></div>
          )}
        </div>
        <div style={{fontSize:'1.08rem', color:'#2d3a4a', lineHeight:1.7, background:'#f8fafc', borderRadius:10, padding:'24px 18px', minHeight:120, marginBottom:24}}>
          {book.description}
        </div>
        <div style={{display:'flex', justifyContent:'center', gap:16}}>
          <button className={`book-fav-btn${favorite ? ' active' : ''}`} onClick={handleFavorite}>
            {favorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
          </button>
        </div>
      </div>
    </>
  );
};

export default BookShowPage;
