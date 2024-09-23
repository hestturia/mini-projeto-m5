import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import MovieDetail from './pages/MovieDetail';
import movies from './data/movies';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
