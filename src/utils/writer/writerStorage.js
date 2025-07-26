// utils/writerStorage.js

// Guarda un escritor en localStorage
export function saveWriterToLocalStorage(writer) {
  const writers = JSON.parse(localStorage.getItem('writers') || '[]');
  writers.push(writer);
  localStorage.setItem('writers', JSON.stringify(writers));
}

// Obtiene todos los escritores de localStorage
export function getWritersFromLocalStorage() {
  return JSON.parse(localStorage.getItem('writers') || '[]');
}

// Elimina un escritor de localStorage por su iduser y también elimina todos los libros asociados a ese escritor
export function deleteWriterByIduser(iduser) {
  // Eliminar writer
  const writers = getWritersFromLocalStorage();
  const updatedWriters = writers.filter(w => w.iduser !== iduser);
  localStorage.setItem('writers', JSON.stringify(updatedWriters));
  // Eliminar libros asociados a ese writer
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  const updatedBooks = books.filter(b => b.idwriter !== (writers.find(w => w.iduser === iduser)?.idwriter));
  localStorage.setItem('books', JSON.stringify(updatedBooks));
}
