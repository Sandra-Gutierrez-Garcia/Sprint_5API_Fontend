// utils/userStorage.js

// Guarda un usuario en localStorage
export function saveUserToLocalStorage(user) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

// Obtiene todos los usuarios de localStorage
export function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

// Establece el usuario actual en localStorage
export function setCurrentUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

// Obtiene el usuario actual de localStorage
export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser') || 'null');
}

// Elimina el usuario actual de localStorage
export function logoutUser() {
  localStorage.removeItem('currentUser');
}

// Crea un nuevo usuario con id único, username, correo y contraseña
export function createUser({ username, email, password }) {
  // Generar un id único (puedes mejorar esto según tus necesidades)
  const id = Date.now();
  return {
    id,
    username,
    email, // Usar 'email' como clave
    password, // Usar 'password' como clave
  };
}

// Elimina un usuario por su id
export function deleteUserById(id) {
  // Eliminar usuario
  const users = getUsersFromLocalStorage();
  const updatedUsers = users.filter(u => u.id !== id);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  // Eliminar writer asociado
  const writers = JSON.parse(localStorage.getItem('writers') || '[]');
  const writer = writers.find(w => w.iduser === id);
  if (writer) {
    // Eliminar libros del writer
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    const updatedBooks = books.filter(b => b.idwriter !== writer.idwriter);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    // Eliminar writer
    const updatedWriters = writers.filter(w => w.iduser !== id);
    localStorage.setItem('writers', JSON.stringify(updatedWriters));
  }
  // Eliminar usuario actual
  localStorage.removeItem('currentUser');
}
