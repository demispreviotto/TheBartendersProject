import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'
import Navbar from './components/Navbar'
import CartContainer from './pages/CartContainer';
import DashboardClient from './pages/DashboardClient';
import DashboardCreator from './pages/DashboardCreator';



function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='/profile' element={<DashboardClient />} />
        <Route path='/creator' element={<DashboardCreator />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
