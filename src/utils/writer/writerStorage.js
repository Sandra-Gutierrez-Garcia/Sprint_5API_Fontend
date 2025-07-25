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
