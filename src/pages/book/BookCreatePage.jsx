import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Componentes
import MDEditor from '@uiw/react-md-editor';

// Estilos
import '../../styles/book/BookCreatePage.css';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

// Utils
import { getCurrentUser } from '../../utils/user/userStorage';
import { getWritersFromLocalStorage, saveWriterToLocalStorage } from '../../utils/writer/writerStorage';
import {
  BOOK_CREATE,
  GENRES,
  handleChange,
  handleContentChange,
  handleAddPage,
  handlePageChange,
  handleImageChange,
  saveBookToStorage
} from '../../utils/book/bookUtils';

export default function BookCreatePage() {
  // --- State ---
  const [book, setBook] = useState(BOOK_CREATE);
  const [success, setSuccess] = useState(false);
  const [pages, setPages] = useState(['']);
  const [currentPage, setCurrentPage] = useState(0);
  const [showGenres, setShowGenres] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleSave = () => {
    // Validar que al menos un género esté seleccionado
    if (!book.genres || book.genres.length === 0) {
      alert('Debes seleccionar al menos un género para el libro.');
      return;
    }
    // Obtener writer actual por iduser
    const writers = getWritersFromLocalStorage();
    const writer = writers.find(w => w.iduser === user?.id);
    // Asignar autor y idwriter automáticamente
    const bookToSave = {
      ...book,
      author: user?.username || '',
      idwriter: writer?.idwriter || null, // Vinculación por idwriter
      pages
    };
    const id = saveBookToStorage(bookToSave);
    setBook(BOOK_CREATE);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    // Redirigir a la página del writer después de guardar
    if (id) navigate('/perfil-writer');
  };

  // --- Render ---
  return (
    <div className="book-create-outer-bg">
      <div className="book-create-main-card">
        <div className="book-create-page-modern">
          <div className="book-create-left">
            <form onSubmit={e => {
              e.preventDefault();
              handleSave();
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
              <label style={{width:'100%',marginBottom:18, fontWeight:600, color:'#2d3a4a', fontSize:'1.09rem', letterSpacing:'0.01em', display:'flex', flexDirection:'column', gap:6}}>
                <span style={{display:'flex', alignItems:'center', gap:6}}>
                  Géneros
                  <span style={{color:'red', fontSize:'1.2em'}}>*</span>
                </span>
                <div style={{
                  display:'grid',
                  gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))',
                  gap:'10px 18px', marginTop:'8px',
                  background:'#f8fafc', borderRadius:10, padding:'14px 10px', border:'1.5px solid #dbeafe',
                  boxShadow:'0 1px 4px #e0e7fa',
                  minHeight:48
                }}>
                  {GENRES.map(g => (
                    <label key={g} style={{
                      display:'flex', alignItems:'center', gap:6, fontWeight:500, fontSize:'1.04rem',
                      background: book.genres.includes(g) ? '#e0e7fa' : 'transparent',
                      borderRadius:6, padding:'4px 10px', cursor:'pointer',
                      border: book.genres.includes(g) ? '1.5px solid #4a3c8c' : '1.5px solid transparent',
                      transition:'all 0.2s',
                      width:'100%'
                    }}>
                      <input
                        type="checkbox"
                        value={g}
                        checked={book.genres.includes(g)}
                        onChange={e => {
                          if (e.target.checked) {
                            setBook(prev => ({ ...prev, genres: [...prev.genres, g] }));
                          } else {
                            setBook(prev => ({ ...prev, genres: prev.genres.filter(gen => gen !== g) }));
                          }
                        }}
                        style={{ accentColor: '#4a3c8c', width:18, height:18 }}
                      />
                      {g}
                    </label>
                  ))}
                </div>
                <span style={{fontSize:'0.98rem', color:'#888', marginTop:'6px'}}>Selecciona uno o más géneros.</span>
              </label>
              <div style={{marginBottom: '16px', color: '#e67e22', fontWeight: 600, fontSize: '1.01rem', textAlign: 'center'}}>
                Una vez guardes el libro con el género seleccionado, <span style={{color:'#c0392b'}}>no podrás modificarlo</span>.
              </div>
              <div className="form-buttons-row">
                <button type="submit">Guardar Libro</button>
                <button type="button" className="cancel-book-btn" onClick={() => {
                  navigate('/perfil-writer');
                }}>Cancelar</button>
              </div>
            </form>
            {success && <p className="success-message">¡Libro guardado!</p>}
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
              placeholder="Escribe aquí el contenido principal de tu libro..."
              style={{ width: '90%', maxWidth: 700, margin: '0 auto', borderRadius: 18, background: '#fff', boxShadow: '0 2px 12px #e0e7fa', padding: '18px 18px 10px 18px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
