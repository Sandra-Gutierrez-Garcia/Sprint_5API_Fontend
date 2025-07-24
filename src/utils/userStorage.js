// utils/userStorage.js

export function saveUserToLocalStorage(user) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

export function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

export function setCurrentUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser') || 'null');
}

export function logoutUser() {
  localStorage.removeItem('currentUser');
}
