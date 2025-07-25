// utils/bookUtils.js

// --- Constantes ---
export const BOOK_CREATE = {
  id: 0,
  title: '',
  author: '',
  cover: '',
  genre: '',
  description: '',
  image: '',
  genres: [],
  content: '',
};

export const GENRES = [
  'Fantasía', 'Ciencia Ficción', 'Romance', 'Misterio', 'Terror', 'Aventura', 'Drama', 'Histórico', 'Juvenil', 'Poesía'
];

// --- Handlers de formulario ---
export const handleChange = (e, setBook) => {
  const { name, value } = e.target;
  setBook(prev => ({ ...prev, [name]: value }));
};

export const handleGenreChange = (e, setBook) => {
  const { options } = e.target;
  const selected = [];
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) selected.push(options[i].value);
  }
  setBook(prev => ({ ...prev, genres: selected }));
};

export const handleContentChange = (value, currentPage, setPages) => {
  setPages(prev => {
    const newPages = [...prev];
    newPages[currentPage] = value || '';
    return newPages;
  });
};

export const handleAddPage = (setPages, pages, setCurrentPage) => {
  setPages(prev => [...prev, '']);
  setCurrentPage(pages.length);
};

export const handlePageChange = (idx, setCurrentPage) => setCurrentPage(idx);

// --- Auxiliares ---
export function handleImageChange(e, book, setBook) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setBook({ ...book, image: reader.result });
    };
    reader.readAsDataURL(file);
  }
}

export function saveBookToStorage(book) {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

export function getBooksFromStorage() {
  return JSON.parse(localStorage.getItem('books')) || [];
}
