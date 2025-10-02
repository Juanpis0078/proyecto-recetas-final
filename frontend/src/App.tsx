import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarComp from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <div>
      <NavbarComp />
      <div className="container mt-4">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/recipes' element={<Recipes/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </div>
  );
}
