import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/index';
import Register from './pages/Userpage/Register';
import Login from './pages/Userpage/login';
import BookPage from './pages/Bookpage';

const App = () => {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="users/register" exact element={<Register />} />
    <Route path="users/login" exact element={<Login />} />
    <Route path="books" exact element={<BookPage />} />
  </Routes>
</Router>
  )
}

export default App