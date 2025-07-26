// utils/book/favoriteBooks.js
import { getCurrentUser } from '../user/userStorage';

export function getFavoriteBooks() {
  const user = getCurrentUser();
  if (!user) return [];
  return JSON.parse(localStorage.getItem(`favoriteBooks_${user.id}`) || '[]');
}

export function addFavoriteBook(book) {
  const user = getCurrentUser();
  if (!user) return;
  const favorites = getFavoriteBooks();
  if (!favorites.some(b => String(b.id) === String(book.id))) {
    favorites.push(book);
    localStorage.setItem(`favoriteBooks_${user.id}`, JSON.stringify(favorites));
  }
}

export function removeFavoriteBook(id) {
  const user = getCurrentUser();
  if (!user) return;
  const favorites = getFavoriteBooks();
  const updated = favorites.filter(b => String(b.id) !== String(id));
  localStorage.setItem(`favoriteBooks_${user.id}`, JSON.stringify(updated));
}

export function isBookFavorite(id) {
  const favorites = getFavoriteBooks();
  return favorites.some(b => String(b.id) === String(id));
}
