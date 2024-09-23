import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import SearchForm from '../components/searchForm';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/movie/all');
      setMovies(response.data);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://localhost:3000/movie/director/${query}`);
      setMovies(response.data);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      setMovies([]);
    }
  };

  return (
    
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Bem-vindo ao MovieEco</h1>
      <p className={styles.description}>
        Descubra filmes que inspiram a consciência ambiental e o amor pela natureza.
      </p>
      <Link to="/movies">
        <button className={styles.button}>Explorar Filmes</button>
      </Link>
      <SearchForm onSearch={handleSearch} />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );


};


export default Home;