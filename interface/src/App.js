import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/index';
import Register from './pages/Userpage/Register';
import Login from './pages/Userpage/login';
import BookPage from './pages/Bookpage';
import BookDetailPage from './pages/Bookpage/BookDetailPage';
import AddBookPage from './pages/Bookpage/AddBookPage';
import UpdateBookPage from './pages/Bookpage/UpdateBookPage';

const App = () => {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="users/register" exact element={<Register />} />
    <Route path="users/login" exact element={<Login />} />
    <Route path="books" exact element={<BookPage />} />
    <Route path="books/detail/:id" exact element={<BookDetailPage />} />
    <Route path="books/add" exact element={<AddBookPage />} />
    <Route path="books/update/:id" exact element={<UpdateBookPage />} />
  </Routes>
</Router>
  )
}

export default App