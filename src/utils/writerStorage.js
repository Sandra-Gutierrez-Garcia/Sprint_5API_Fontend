// utils/writerStorage.js

export function saveWriterToLocalStorage(writer) {
  const writers = JSON.parse(localStorage.getItem('writers') || '[]');
  writers.push(writer);
  localStorage.setItem('writers', JSON.stringify(writers));
}

export function getWritersFromLocalStorage() {
  return JSON.parse(localStorage.getItem('writers') || '[]');
}
