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
  // Asignar un id único incremental si no existe
  let newId = 1;
  if (books.length > 0) {
    const maxId = Math.max(...books.map(b => Number(b.id) || 0));
    newId = maxId + 1;
  }
  const bookToSave = { ...book };
  if (!bookToSave.id || bookToSave.id === 0) {
    bookToSave.id = newId;
  }
  books.push(bookToSave);
  localStorage.setItem('books', JSON.stringify(books));
  return bookToSave.id;
}

export function getBooksFromStorage() {
  // Libros de prueba (siempre presentes)
  const demoBooks = [
    { id: 1, title: "The Lantern’s Tale", author: "Nina Kestrel", cover: "/images/bonfire-9681097_1280.jpg", genre: "Fantasy", description: "A lantern’s light reveals the truth on the longest night.", status: "proceso" },
    { id: 2, title: "Firefly Dreams", author: "Owen Marlo", cover: "/images/girl-7459130_1280.jpg", genre: "Romance", description: "A summer of fireflies, wishes, and unexpected friendships.", status: "terminado" },
    { id: 3, title: "The Painted Door", author: "Samira Voss", cover: "/images/hall-7986771_1280.jpg", genre: "Fantasy", description: "A door painted with dreams leads to another reality.", status: "abandonado" },
    { id: 4, title: "Lost in the Nebula", author: "Liam Dray", cover: "/images/spiral-staircase-877834_1280.jpg", genre: "Sci-Fi", description: "Lost between stars, one crew must find their way home.", status: "proceso" },
    { id: 5, title: "The Whispering Gallery", author: "Tara Finch", cover: "/images/bonfire-9681097_1280.jpg", genre: "Mystery", description: "Voices echo in the gallery, telling stories of the past.", status: "terminado" },
    { id: 6, title: "Beneath the Willow", author: "Eliot Rowe", cover: "/images/girl-7459130_1280.jpg", genre: "Romance", description: "A secret beneath the willow tree changes everything.", status: "proceso" },
    { id: 7, title: "Midnight at the Bazaar", author: "Jonas Pike", cover: "/images/hall-7986771_1280.jpg", genre: "Fantasy", description: "Strange things happen when the clock strikes twelve.", status: "abandonado" },
    { id: 8, title: "The Forgotten Melody", author: "Rhea Lark", cover: "/images/spiral-staircase-877834_1280.jpg", genre: "Mystery", description: "A melody lost in time, waiting to be found.", status: "terminado" }
  ];
  const userBooks = JSON.parse(localStorage.getItem('books')) || [];
  // Evitar duplicados por id
  const allBooks = [...demoBooks.filter(d => !userBooks.some(u => String(u.id) === String(d.id))), ...userBooks];
  return allBooks;
}

export function getBookById(id) {
  const books = getBooksFromStorage();
  return books.find(b => String(b.id) === String(id));
}

export function updateBookInStorage(updatedBook) {
  const books = getBooksFromStorage();
  const idx = books.findIndex(b => String(b.id) === String(updatedBook.id));
  if (idx !== -1) {
    books[idx] = updatedBook;
    localStorage.setItem('books', JSON.stringify(books));
  }
}
