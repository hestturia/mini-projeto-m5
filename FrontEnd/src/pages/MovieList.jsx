import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import styles from '../styles/MoviesList.module.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/movie/all')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Erro ao buscar os filmes:', error));
  }, []);

  return (
    <div className={styles.listContainer}>
      <h1 className={styles.title}>Filmes de Consciência Ecológica</h1>
      <div className={styles.moviesGrid}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;