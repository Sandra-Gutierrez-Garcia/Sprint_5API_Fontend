import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Componentes
import Header from "../components/Header";
import BookCard from "../components/BookCard";

// Estilos
import "../styles/user/HomePage.css";

// Utils
import { getBooksFromStorage } from "../utils/book/bookUtils";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(getBooksFromStorage());
  }, []);
  return (
    <>
      <Header />
      <section className="top-book-banner">
        <div className="top-book-info">
          <h2>"El Viaje de la Imaginación"</h2>
        </div>
      </section>
      <div className="books-showcase">
        <h2 className="books-showcase-title">Books Showcase</h2>
        <div className="books-list">
          {books.slice(0, 4).map(book => (
            <BookCard key={book.id} id={book.id} cover={book.cover} title={book.title} author={book.author} description={book.description} hideStatus hideRead />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
