import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bienvenido a la App de Libros</h1>
      <p>Explora libros creados por la comunidad o inicia sesión para crear los tuyos.</p>
      {/* Aquí se agregarán los componentes principales: ListadoLibros, PerfilUsuario, etc. */}
    </>
  )
}

export default App
