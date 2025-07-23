import React, { useEffect, useState } from "react";
import "./HomePage.css";
import bannerBook from "./assets/images/girl-7459130_1280.jpg";
import img1 from "./assets/images/bonfire-9681097_1280.jpg";
import img2 from "./assets/images/girl-7459130_1280.jpg";
import img3 from "./assets/images/hall-7986771_1280.jpg";
import img4 from "./assets/images/spiral-staircase-877834_1280.jpg";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const localCovers = [img1, img2, img3, img4];

function getRandomBook() {
  const titles = [
    "The Crystal Labyrinth", "Firefly Dreams", "The Clockmaker's Secret", "Lost in the Nebula"
  ];
  const authors = [
    "Samira Voss", "Liam Dray", "Nina Kestrel", "Owen Marlo"
  ];
  const descs = [
    "A puzzle of mirrors and secrets awaits in the city’s heart.",
    "A summer of fireflies, wishes, and unexpected friendships.",
    "A mysterious clock and a race against time itself.",
    "Lost between stars, one crew must find their way home."
  ];
  const idx = getRandomInt(0, 3);
  const imgIdx = getRandomInt(0, localCovers.length - 1);
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: titles[idx],
    author: authors[idx],
    cover: localCovers[imgIdx],
    description: descs[idx]
  };
}

const mockBooks = [
  {
    id: 'book1',
    title: 'The Lantern’s Tale',
    author: 'Nina Kestrel',
    cover: img1,
    description: 'A lantern’s light reveals the truth on the longest night.'
  },
  {
    id: 'book2',
    title: 'Firefly Dreams',
    author: 'Owen Marlo',
    cover: img2,
    description: 'A summer of fireflies, wishes, and unexpected friendships.'
  },
  {
    id: 'book3',
    title: 'The Painted Door',
    author: 'Samira Voss',
    cover: img3,
    description: 'A door painted with dreams leads to another reality.'
  },
  {
    id: 'book4',
    title: 'Lost in the Nebula',
    author: 'Liam Dray',
    cover: img4,
    description: 'Lost between stars, one crew must find their way home.'
  },
  {
    id: 'book5',
    title: 'The Whispering Gallery',
    author: 'Tara Finch',
    cover: img1,
    description: 'Voices echo in the gallery, telling stories of the past.'
  },
  {
    id: 'book6',
    title: 'Beneath the Willow',
    author: 'Eliot Rowe',
    cover: img2,
    description: 'A hidden world beneath the willow tree changes everything.'
  },
  {
    id: 'book7',
    title: 'Midnight at the Bazaar',
    author: 'Jonas Pike',
    cover: img3,
    description: 'At midnight, the bazaar comes alive with magic and danger.'
  },
  {
    id: 'book8',
    title: 'The Forgotten Melody',
    author: 'Rhea Lark',
    cover: img4,
    description: 'A melody forgotten by all but one holds the key to peace.'
  }
];

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulación de llamada a la API (mock)
    setTimeout(() => {
      setBooks([
        { id: 1, title: 'El Viaje de la Imaginación' },
        { id: 2, title: 'Cuentos para Soñar' },
        { id: 3, title: 'Historias del Bosque' }
      ]);
    }, 700);
  }, []);

  return (
    <div className="homepage-new">
      {/* Header horizontal */}
      <header className="main-header">
        <div className="header-logo">AppBook</div>
        <nav className="header-menu">
          <a href="#" className="active">Home</a>
          <a href="#">Books</a>
          <a href="#">Writers</a>
        </nav>
        <div className="header-actions">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </header>

      {/* Banner del libro más gustado */}
      <section className="top-book-banner">
        <div className="top-book-info">
          <h2>El libro más gustado es:</h2>
          <p className="top-book-title">"El Viaje de la Imaginación"</p>
        </div>
        <img src={bannerBook} alt="El libro más gustado" className="top-book-img" />
      </section>

      {/* Showcase de libros */}
      <section className="books-showcase">
        <h2 className="showcase-title">Books Showcase</h2>
        <div className="showcase-list">
          {mockBooks.map(book => (
            <div className="showcase-book" key={book.id}>
              <img src={book.cover} alt={book.title} className="showcase-book-img" />
              <div className="showcase-book-info">
                <h3 className="showcase-book-title">{book.title}</h3>
                <p className="showcase-book-author">by {book.author}</p>
                <p className="showcase-book-desc">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
