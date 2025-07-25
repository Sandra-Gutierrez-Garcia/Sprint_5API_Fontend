import { useState } from 'react'
import './styles/App.css'
import HomePage from './pages/HomePage'
import BookPage from './pages/book/BookPage'
import LoginPage from './pages/user/LoginPage'
import RegisterPage from './pages/user/RegisterPage'
import UserProfilePage from './pages/user/UserProfilePage'
import PageCreateWriter from './pages/writer/PageCreateWriter'
import WriterProfilePage from './pages/writer/WriterProfilePage'
import BookCreatePage from './pages/book/BookCreatePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/books' element={<BookPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/perfil' element={<UserProfilePage />} />
        <Route path='/crear-writer' element={<PageCreateWriter />} />
        <Route path='/perfil-writer' element={<WriterProfilePage />} />
        <Route path='/perfil-escritor' element={<WriterProfilePage />} />
        <Route path='/crear-libro' element={<BookCreatePage />} />
      </Routes>
    </Router>
  )
}

export default App
