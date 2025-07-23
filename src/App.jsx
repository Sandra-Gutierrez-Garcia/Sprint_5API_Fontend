import { useState } from 'react'
import './App.css'
import HomePage from './HomePage'
import BookPage from './BookPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/books' element={<BookPage />} />
      </Routes>
    </Router>
  )
}

export default App
