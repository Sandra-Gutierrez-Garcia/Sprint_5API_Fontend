import React from "react";
import "../styles/BookPage.css";
import img1 from "../assets/images/bonfire-9681097_1280.jpg";
import img2 from "../assets/images/girl-7459130_1280.jpg";
import img3 from "../assets/images/hall-7986771_1280.jpg";
import img4 from "../assets/images/spiral-staircase-877834_1280.jpg";
import Header from "../components/Header";
import BookCard from "../components/BookCard";

const books = [
  { id: 1, title: "The Lantern’s Tale", author: "Nina Kestrel", cover: img1, genre: "Fantasy" },
  { id: 2, title: "Firefly Dreams", author: "Owen Marlo", cover: img2, genre: "Romance" },
  { id: 3, title: "The Painted Door", author: "Samira Voss", cover: img3, genre: "Fantasy" },
  { id: 4, title: "Lost in the Nebula", author: "Liam Dray", cover: img4, genre: "Sci-Fi" },
  { id: 5, title: "The Whispering Gallery", author: "Tara Finch", cover: img1, genre: "Mystery" },
  { id: 6, title: "Beneath the Willow", author: "Eliot Rowe", cover: img2, genre: "Romance" },
  { id: 7, title: "Midnight at the Bazaar", author: "Jonas Pike", cover: img3, genre: "Fantasy" },
  { id: 8, title: "The Forgotten Melody", author: "Rhea Lark", cover: img4, genre: "Mystery" },
];

const genres = ["Fantasy", "Romance", "Sci-Fi", "Mystery"];

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

const BookPage = () => {
  return (
    <div className="bookpage-container">
      <Header />
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
  );
};

export default BookPage;
