import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/index';
import Register from './pages/Userpage/Register';
import Login from './pages/Userpage/login';

const App = () => {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="users/register" exact element={<Register />} />
    <Route path="users/login" exact element={<Login />} />
  </Routes>
</Router>
  )
}

export default App