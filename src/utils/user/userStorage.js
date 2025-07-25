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
