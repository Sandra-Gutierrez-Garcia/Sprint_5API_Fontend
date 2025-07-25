import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Componentes
import MDEditor from '@uiw/react-md-editor';

// Estilos
import './BookCreatePage.css';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

// Utils
import { getCurrentUser } from '../utils/userStorage';
import { getWritersFromLocalStorage, saveWriterToLocalStorage } from '../utils/writerStorage';
import {
  BOOK_CREATE,
  GENRES,
  handleChange,
  handleContentChange,
  handleAddPage,
  handlePageChange,
  handleImageChange,
  saveBookToStorage
} from '../utils/bookUtils';

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

  // --- Render ---
  return (
    <div className="book-create-outer-bg">
      <div className="book-create-page-modern">
        <div className="book-create-left">
          <form onSubmit={e => {
            e.preventDefault();
            saveBookToStorage(book);
            setBook(BOOK_CREATE);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 2000);
          }} className="form book-create-form">
            <label>
              Título:
              <input
                type="text"
                name="title"
                value={book.title}
                onChange={e => handleChange(e, setBook)}
                required
              />
            </label>
            <label>
              Autor:
              <input
                type="text"
                name="author"
                value={book.author}
                onChange={e => handleChange(e, setBook)}
                required
              />
            </label>
            <label>
              Descripción:
              <textarea
                name="description"
                value={book.description}
                onChange={e => handleChange(e, setBook)}
                required
              />
            </label>
            <label>
              URL de la imagen:
              <input
                type="text"
                name="image"
                value={book.image}
                onChange={e => handleChange(e, setBook)}
              />
            </label>
            <label>
              Imagen de portada:
              <input
                type="file"
                accept="image/*"
                onChange={e => handleImageChange(e, book, setBook)}
              />
            </label>
            {book.image && (
              <img
                src={book.image}
                alt="Portada libro preview"
                style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 12, marginTop: 8, boxShadow: '0 2px 12px #e0e7fa' }}
              />
            )}
            <label>
              Géneros:
              <div className="genre-dropdown-container">
                <button
                  type="button"
                  className="genre-dropdown-toggle"
                  onClick={() => setShowGenres(!showGenres)}
                >
                  {book.genres.length > 0 ? `${book.genres.length} seleccionado(s)` : 'Seleccionar géneros'}
                  <span className="genre-dropdown-arrow">▼</span>
                </button>
                {showGenres && (
                  <div className="genre-checkbox-list genre-dropdown-list">
                    {GENRES.map((g) => (
                      <label key={g} className="genre-checkbox-item">
                        <input
                          type="checkbox"
                          value={g}
                          checked={book.genres.includes(g)}
                          onChange={e => {
                            setBook((prev) =>
                              e.target.checked
                                ? { ...prev, genres: [...prev.genres, g] }
                                : { ...prev, genres: prev.genres.filter(genre => genre !== g) }
                            );
                          }}
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <div className="genre-warning">
                Una vez creado el libro <b>no podrás volver a cambiar los géneros</b>.
              </div>
            </label>
            <div className="form-buttons-row">
              <button type="submit">Guardar Libro</button>
              <button type="button" className="cancel-book-btn" onClick={() => {
                if (!user || !user.username) {
                  navigate('/login');
                  return;
                }
                const writers = getWritersFromLocalStorage();
                const exists = writers.some((w) => w.username === user.username);
                if (!exists) {
                  saveWriterToLocalStorage({ username: user.username, bio: '' });
                }
                navigate('/perfil-writer');
              }}>Cancelar</button>
            </div>
          </form>
          {success && <p className="success-message">¡Libro guardado!</p>}
        </div>
        <div className="book-create-right">
          <div className="book-content-label">Contenido del libro</div>
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
          <MDEditor
            className="book-content-md-editor"
            value={pages[currentPage]}
            onChange={value => handleContentChange(value, currentPage, setPages)}
            height={350}
            preview="edit"
            placeholder="Escribe aquí el contenido principal de tu libro..."
            style={{ width: '90%', maxWidth: 700, margin: '0 auto', borderRadius: 16 }}
          />
        </div>
      </div>
    </div>
  );
}
