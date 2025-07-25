// Lógica y hooks reutilizables para BookEditPage
import { useEffect, useState } from 'react';
import { getBookById, updateBookInStorage } from './bookUtils';
import { getCurrentUser } from '../../utils/user/userStorage';
import { useNavigate, useParams } from 'react-router-dom';

export function useBookEdit() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [pages, setPages] = useState(['']);
  const [currentPage, setCurrentPage] = useState(0);
  const [showPages, setShowPages] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    const fetchedBook = getBookById(bookId);
    if (!fetchedBook) {
      navigate('/perfil-writer');
      return;
    }
    setBook(fetchedBook);
    if (Array.isArray(fetchedBook.pages) && fetchedBook.pages.length > 0) {
      setPages(fetchedBook.pages);
    } else if (typeof fetchedBook.content === 'string' && fetchedBook.content.length > 0) {
      setPages([fetchedBook.content]);
    } else {
      setPages(['']);
    }
  }, [bookId, navigate]);

  useEffect(() => {
    if (book && user?.username && book.author !== user.username) {
      setBook(prev => ({ ...prev, author: user.username }));
    }
  }, [book, user]);

  return {
    book, setBook, pages, setPages, currentPage, setCurrentPage, showPages, setShowPages, success, setSuccess, navigate, user, bookId
  };
}

export function handleEditSubmit({ book, pages, setSuccess, navigate }) {
  updateBookInStorage({ ...book, pages });
  setSuccess(true);
  setTimeout(() => setSuccess(false), 2000);
  navigate('/perfil-writer');
}
