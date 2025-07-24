import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import Header from "../components/Header";
import BookCard from "../components/BookCard";
import { books } from "../utils/booksData";

const HomePage = () => (
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
          <BookCard key={book.id} cover={book.cover} title={book.title} author={book.author} description={book.description} />
        ))}
      </div>
    </div>
  </>
);

export default HomePage;
