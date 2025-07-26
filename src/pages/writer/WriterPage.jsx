import React, { useEffect, useState } from "react";
import { writersData } from "../../utils/writer/writersData";
import { getWritersFromLocalStorage } from "../../utils/writer/writerStorage";
import { getBooksFromStorage } from "../../utils/book/bookUtils";
import WriterCard from "../../components/WriterCard";
import Header from "../../components/Header";
import "../../styles/writer/WriterPage.css";

const WriterPage = () => {
  const [allWriters, setAllWriters] = useState(writersData);

  useEffect(() => {
    let localWriters = [];
    try {
      localWriters = getWritersFromLocalStorage() || [];
    } catch (e) {
      localWriters = [];
    }
    // Normalizar estructura para evitar errores si falta algún campo
    const books = getBooksFromStorage();
    const normalizedLocalWriters = localWriters.map((w) => {
      // Buscar libros de este escritor
      const writerBooks = books.filter(
        (b) => String(b.idwriter) === String(w.idwriter)
      );
      return {
        id: w.idwriter || w.id || w.iduser || Math.random(),
        name: w.username || w.name || w.nombre || "Sin nombre",
        bio: w.biografia || w.bio || w.descripcion || "",
        image:
          w.image ||
          w.imagen ||
          "/src/assets/images/girl-7459130_1280.jpg",
        books: writerBooks.map((b) => ({ id: b.id, title: b.title })),
      };
    });
    setAllWriters([...writersData, ...normalizedLocalWriters]);
  }, []);

  return (
    <>
      <Header />
      <div className="writer-page">
        <h2>Todos los escritores</h2>
        <div className="writers-list">
          {allWriters.map((writer, idx) => (
            <WriterCard key={writer.id || idx} writer={writer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WriterPage;
