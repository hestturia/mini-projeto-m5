import movieDatabase from '../database/movie.database.js';

 
    export const getAllMovies = (req, res) => {
    res.json(movieDatabase);
  };

    export const getMovieById = (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movieDatabase.find(movie => movie.id === id);
    
    
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  };


    export const getMoviesByDirector = (req, res) => {
    console.log (req.params); const director = req.params.director.toLowerCase().replace("-", " ");
    const filteredMovies = movieDatabase.filter(movie => movie.director.toLowerCase().includes(director));
    
    if (filteredMovies.length > 0) {
      res.json(filteredMovies);
    } else {
      res.status(404).json({ message: 'Não foram encontrados filmes para esse diretor' });
    }
  };
