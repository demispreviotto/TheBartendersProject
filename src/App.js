import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Recipes from './pages/Recipes'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'
import Navbar from './components/Navbar'
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
