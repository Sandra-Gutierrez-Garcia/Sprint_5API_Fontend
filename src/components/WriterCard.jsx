import React from "react";

const WriterCard = ({ writer }) => (
  <div className="writer-card">
    <div className="writer-card-header">
      <img src={writer.image} alt={writer.name} className="writer-image" />
      <div className="writer-info">
        <h3 className="writer-name">{writer.name}</h3>
        <p className="writer-bio">{writer.bio}</p>
      </div>
    </div>
    <div className="writer-books-section">
      <h4 className="writer-books-title">Libros:</h4>
      <ul className="writer-books-list">
        {writer.books.map((book) => (
          <li key={book.id} className="writer-book-item">{book.title}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default WriterCard;
