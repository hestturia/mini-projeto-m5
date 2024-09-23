import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/MovieCard.module.css';

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.card}>
      <img src={movie.imageUrl} alt={movie.titulo} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{movie.titulo}</h2>
      <p className={styles.cardDescription}><strong>Lançamento:</strong> {movie.lancamento}</p>
      <p className={styles.cardDescription}><strong>Diretor:</strong> {movie.director}</p>
      <p className={styles.cardDescription}>{movie.descricao}</p>
      <p className={styles.cardThemes}>
          Temas: {movie.temas_ambientais.join(', ')}
        </p>
      <p className={styles.cardYear}>Ano de Lançamento: {movie.lancamento}</p>
      <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
    </div>
  );
};

export default MovieCard;