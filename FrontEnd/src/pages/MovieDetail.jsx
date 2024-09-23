import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from '../styles/MovieDetail.module.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/movie/${id}`);
      setMovie(response.data);
    } catch (error) {
      console.error('Erro ao buscar filme:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <div className={styles.movieDetailContainer}>
      {loading ? (
        <p>Carregando...</p>
      ) : movie ? (
        <div className={styles.details}>
          <h1 className={styles.title}>{movie.titulo}</h1>
          <p><strong>Lançamento:</strong> {movie.lancamento}</p>
          <p><strong>Descrição:</strong> {movie.descricao}</p>
          <p><strong>Diretor:</strong> {movie.director}</p>
          <p><strong>Temas:</strong> {movie.temas_ambientais.join(', ')}</p>
        </div>
      ) : (
        <p>Filme não encontrado</p>
      )}
    </div>
  );
};

export default MovieDetail;