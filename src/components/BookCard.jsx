import React from "react";

// Estilos
import "../styles/book/BookCard.css";

// Componente para mostrar la información de un libro
const BookCard = ({ cover, title, author, description, onEdit, onDelete }) => (
  <div className="showcase-book">
    <img src={cover} alt={title} className="showcase-book-img" />
    <div className="showcase-book-info">
      <h3 className="showcase-book-title">{title}</h3>
      <p className="showcase-book-author">by {author}</p>
      <p className="showcase-book-desc">{description}</p>
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        {onEdit && (
          <button
            className="book-edit-btn"
            onClick={onEdit}
            style={{
              background: "#e67e22",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "4px 12px",
              cursor: "pointer",
            }}
          >
            Editar
          </button>
        )}
        {onDelete && (
          <button
            className="book-delete-btn"
            onClick={onDelete}
            style={{
              background: "#e74c3c",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "4px 12px",
              cursor: "pointer",
            }}
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  </div>
);

export default BookCard;
