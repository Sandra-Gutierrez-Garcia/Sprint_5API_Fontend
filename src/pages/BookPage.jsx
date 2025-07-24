import React from "react";
import "../styles/BookPage.css";
import Header from "../components/Header";
import BookCard from "../components/BookCard";
import { books, genres } from "../utils/booksData";

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

const BookPage = () => (
  <>
    <Header />
    <div className="bookpage-container">
      {genres.map(genre => (
        <BookSection key={genre} genre={genre} books={books.filter(b => b.genre === genre)} />
      ))}
      <section className="books-section">
        <h2>Todos los libros</h2>
        <div className="books-list">
          {books.map(book => (
            <BookCard key={book.id} cover={book.cover} title={book.title} author={book.author} description={book.description || ""} />
          ))}
        </div>
      </section>
    </div>
  </>
);

export default BookPage;
