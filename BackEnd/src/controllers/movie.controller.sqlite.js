import movie from "../models/movie.model.sqlite";

class movieController {
    static getAllMovies (req, res){
        const movie = movie.findAll()
        res.json(movie);
    };
};