// utils/booksData.js

// Array de libros ficticios para mostrar en la app
export const books = [
  { id: 1, title: "The Lantern’s Tale", author: "Nina Kestrel", cover: "/images/bonfire-9681097_1280.jpg", genre: "Fantasy", description: "A lantern’s light reveals the truth on the longest night.", status: "proceso" },
  { id: 2, title: "Firefly Dreams", author: "Owen Marlo", cover: "/images/girl-7459130_1280.jpg", genre: "Romance", description: "A summer of fireflies, wishes, and unexpected friendships.", status: "terminado" },
  { id: 3, title: "The Painted Door", author: "Samira Voss", cover: "/images/hall-7986771_1280.jpg", genre: "Fantasy", description: "A door painted with dreams leads to another reality.", status: "abandonado" },
  { id: 4, title: "Lost in the Nebula", author: "Liam Dray", cover: "/images/spiral-staircase-877834_1280.jpg", genre: "Sci-Fi", description: "Lost between stars, one crew must find their way home.", status: "proceso" },
  { id: 5, title: "The Whispering Gallery", author: "Tara Finch", cover: "/images/bonfire-9681097_1280.jpg", genre: "Mystery", description: "Voices echo in the gallery, telling stories of the past.", status: "terminado" },
  { id: 6, title: "Beneath the Willow", author: "Eliot Rowe", cover: "/images/girl-7459130_1280.jpg", genre: "Romance", description: "A secret beneath the willow tree changes everything.", status: "proceso" },
  { id: 7, title: "Midnight at the Bazaar", author: "Jonas Pike", cover: "/images/hall-7986771_1280.jpg", genre: "Fantasy", description: "Strange things happen when the clock strikes twelve.", status: "abandonado" },
  { id: 8, title: "The Forgotten Melody", author: "Rhea Lark", cover: "/images/spiral-staircase-877834_1280.jpg", genre: "Mystery", description: "A melody lost in time, waiting to be found.", status: "terminado" }
];

// Géneros disponibles
export const genres = ["Fantasy", "Romance", "Sci-Fi", "Mystery"];

// Estructura de un libro para creación
export const BOOK_CREATE = {
  id: 0,
  title: '',
  author: '',
  cover: '',
  genre: '',
  description: '',
  // Puedes agregar más campos si tu app lo requiere
  idwriter: null, // Nuevo campo para vincular con el writer
  status: 'proceso', // Nuevo campo: proceso | terminado | abandonado
};
