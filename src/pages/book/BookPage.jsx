import React, { useState } from "react";

// Componentes
import Header from '../../components/Header';
import BookCard from '../../components/BookCard';

// Estilos
import '../../styles/book/BookPage.css';

// Utils
import { books, genres } from '../../utils/book/booksData';

const BookSection = ({ genre, books }) => (
  <section className="books-section">
    <h2>{genre}</h2>
    <div className="books-list">
      {books.map(book => (
        <BookCard key={book.id} cover={book.cover} title={book.title} author={book.author} description={book.description || ""} />
      ))}
    </div>
  </section>
);

const STATUS_OPTIONS = [
  { value: '', label: 'Todos' },
  { value: 'proceso', label: 'En proceso' },
  { value: 'terminado', label: 'Terminado' },
  { value: 'abandonado', label: 'Abandonado' },
];

const BookPage = () => {
  const [statusFilter, setStatusFilter] = useState('');
  const filteredBooks = statusFilter
    ? books.filter(book => book.status === statusFilter)
    : books;

  return (
    <>
      <Header />
      <div className="bookpage-container">
        <div style={{margin:'18px 0 28px 0', display:'flex', alignItems:'center', gap:16}}>
          <label style={{fontWeight:600, color:'#2d3a4a', fontSize:'1.08rem'}}>Filtrar por estado:</label>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            style={{borderRadius:8, border:'1.5px solid #dbeafe', padding:'8px 16px', fontSize:'1.05rem', background:'#fff', boxShadow:'0 1px 4px #e0e7fa', outline:'none'}}>
            {STATUS_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        {statusFilter ? (
          <section className="books-section">
            <h2>Libros</h2>
            <div className="books-list">
              {filteredBooks.map(book => (
                <BookCard key={book.id} cover={book.cover} title={book.title} author={book.author} description={book.description || ""} status={book.status} genres={book.genres} />
              ))}
            </div>
          </section>
        ) : (
          <>
            {genres.map(genre => (
              <BookSection key={genre} genre={genre} books={filteredBooks.filter(b => b.genre === genre)} />
            ))}
            <section className="books-section">
              <h2>Todos los libros</h2>
              <div className="books-list">
                {filteredBooks.map(book => (
                  <BookCard key={book.id} cover={book.cover} title={book.title} author={book.author} description={book.description || ""} status={book.status} genres={book.genres} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default BookPage;
