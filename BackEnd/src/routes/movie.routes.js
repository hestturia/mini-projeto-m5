import { getAllMovies, getMovieById, getMoviesByDirector  } from '../controllers/movie.controller.js';
import { Router } from 'express';

const movieRouter = Router();

movieRouter.get('/movie/all', getAllMovies);

movieRouter.get('/movie/:id', getMovieById);

movieRouter.get('/movie/director/:director', getMoviesByDirector);

export  {movieRouter};