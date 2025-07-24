import { useState } from 'react'
import './styles/App.css'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserProfilePage from './pages/UserProfilePage'
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
      </Routes>
    </Router>
  )
}

export default App
