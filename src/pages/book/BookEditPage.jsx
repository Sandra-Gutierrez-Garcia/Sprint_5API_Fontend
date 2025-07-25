import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import '../../styles/book/BookCreatePage.css';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { getCurrentUser } from '../../utils/user/userStorage';
import { getWritersFromLocalStorage, saveWriterToLocalStorage } from '../../utils/writer/writerStorage';
import {
  handleChange,
  handleContentChange,
  handleAddPage,
  handlePageChange,
  handleImageChange,
  getBookById,
  updateBookInStorage
} from '../../utils/book/bookUtils';

export default function BookEditPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [success, setSuccess] = useState(false);
  const [pages, setPages] = useState(['']);
  const [currentPage, setCurrentPage] = useState(0);
  const [showPages, setShowPages] = useState(false);
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    const fetchedBook = getBookById(bookId);
    if (!fetchedBook) {
      navigate('/perfil-writer');
      return;
    }
    setBook(fetchedBook);
    // Si el libro tiene pages, usarlas; si no, intentar recuperar de content (legacy)
    if (Array.isArray(fetchedBook.pages) && fetchedBook.pages.length > 0) {
      setPages(fetchedBook.pages);
    } else if (typeof fetchedBook.content === 'string' && fetchedBook.content.length > 0) {
      setPages([fetchedBook.content]);
    } else {
      setPages(['']);
    }
  }, [bookId, navigate]);

  // Al editar, el autor siempre es el usuario autenticado
  useEffect(() => {
    if (book && user?.username && book.author !== user.username) {
      setBook(prev => ({ ...prev, author: user.username }));
    }
  }, [book, user]);

  if (!book) return <div>Cargando...</div>;

  return (
    <>
      {/* <Header /> eliminado para no molestar en edición */}
      <div className="book-create-outer-bg">
        <div className="book-create-page-modern">
          <div className="book-create-left">
            <form onSubmit={e => {
              e.preventDefault();
              updateBookInStorage({ ...book, pages });
              setSuccess(true);
              setTimeout(() => setSuccess(false), 2000);
              // Redirigir a la página del writer después de guardar
              navigate('/perfil-writer');
            }} className="form book-create-form" style={{
              width: '100%',
              maxWidth: 420,
              display: 'flex',
              flexDirection: 'column',
              gap: 22,
              alignItems: 'stretch',
              justifyContent: 'center',
              margin: '0 auto',
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 18,
              boxShadow: '0 2px 12px #e0e7fa',
              padding: '36px 32px',
              border: '1.5px solid #e0e7fa',
              minHeight: 420
            }}>
              <h2 style={{
                fontWeight: 700,
                color: '#2d3a4a',
                marginBottom: 24,
                fontSize: '1.35rem',
                letterSpacing: '0.01em',
                textAlign: 'center',
                width: '100%'
              }}>Información del libro</h2>
              <label style={{width:'100%',marginBottom:18, fontWeight:600, color:'#2d3a4a', fontSize:'1.09rem', letterSpacing:'0.01em', display:'flex', flexDirection:'column', gap:6}}>
                Título
                <input
                  type="text"
                  name="title"
                  value={book.title}
                  onChange={e => handleChange(e, setBook)}
                  required
                  style={{borderRadius:10, border:'1.5px solid #dbeafe', padding:'12px 16px', fontSize:'1.08rem', background:'#fff', boxShadow:'0 1px 4px #e0e7fa', outline:'none'}}
                />
              </label>
              <label style={{width:'100%',marginBottom:18, fontWeight:600, color:'#2d3a4a', fontSize:'1.09rem', letterSpacing:'0.01em', display:'flex', flexDirection:'column', gap:6}}>
                Descripción
                <textarea
                  name="description"
                  value={book.description}
                  onChange={e => handleChange(e, setBook)}
                  required
                  style={{minHeight:60, borderRadius:10, border:'1.5px solid #dbeafe', padding:'12px 16px', fontSize:'1.08rem', background:'#fff', boxShadow:'0 1px 4px #e0e7fa', outline:'none', resize:'vertical'}}
                />
              </label>
              <label style={{width:'100%',marginBottom:18, fontWeight:600, color:'#2d3a4a', fontSize:'1.09rem', letterSpacing:'0.01em', display:'flex', flexDirection:'column', gap:6}}>
                Imagen de portada
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => handleImageChange(e, book, setBook)}
                  style={{background:'#fff', borderRadius:10, border:'1.5px solid #dbeafe', padding:'8px 10px', fontSize:'1.05rem', boxShadow:'0 1px 4px #e0e7fa'}}
                />
              </label>
              {book.image && (
                <img
                  src={book.image}
                  alt="Portada libro preview"
                  style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 14, marginTop: 10, boxShadow: '0 2px 12px #e0e7fa', border:'2px solid #e0e7fa', alignSelf:'center' }}
                />
              )}
              <div className="form-buttons-row">
                <button type="submit">Guardar Cambios</button>
                <button type="button" className="cancel-book-btn" onClick={() => {
                  navigate('/perfil-writer');
                }}>Cancelar</button>
              </div>
            </form>
            {success && <p className="success-message">¡Cambios guardados!</p>}
          </div>
          <div className="book-create-right">
            <div className="book-content-label">Contenido del libro</div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '18px 0 24px 0' }}>
              <div className="book-pages-dropdown">
                <button className="book-pages-dropdown-toggle" onClick={() => setShowPages(!showPages)}>
                  Páginas
                  {showPages ? ' ▲' : ' ▼'}
                </button>
                {showPages && (
                  <div className="book-pages-dropdown-list">
                    {pages.map((_, idx) => (
                      <button
                        key={idx}
                        className={`book-page-btn${currentPage === idx ? ' active' : ''}`}
                        onClick={() => { handlePageChange(idx, setCurrentPage); setShowPages(false); }}
                      >
                        Página {idx + 1}
                      </button>
                    ))}
                    <button className="book-add-page-btn" onClick={() => { handleAddPage(setPages, pages, setCurrentPage); setShowPages(false); }} title="Agregar página">
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
            <MDEditor
              className="book-content-md-editor"
              value={pages[currentPage]}
              onChange={value => handleContentChange(value, currentPage, setPages)}
              height={350}
              preview="edit"
              placeholder="Edita aquí el contenido principal de tu libro..."
              style={{ width: '90%', maxWidth: 700, margin: '0 auto', borderRadius: 18, background: '#fff', boxShadow: '0 2px 12px #e0e7fa', padding: '18px 18px 10px 18px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
