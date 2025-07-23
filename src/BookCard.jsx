import React from "react";
import "./BookCard.css";

const BookCard = ({ cover, title, author, description }) => (
  <div className="showcase-book">
    <img src={cover} alt={title} className="showcase-book-img" />
    <div className="showcase-book-info">
      <h3 className="showcase-book-title">{title}</h3>
      <p className="showcase-book-author">by {author}</p>
      <p className="showcase-book-desc">{description}</p>
    </div>
  </div>
);

export default BookCard;
