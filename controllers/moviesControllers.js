
import { Movie } from "../Models/Movie.js";

const moviesController = {
  getAllMovies: async (req, res, next) => {
    console.log(req.body);
    let movies;
    let success = true;
    try {
      movies = await Movie.find();
      throw new Error("Error creado por juandi")
     /*  res.json({
        response: movies,
        success,
        error: null,
      }); */
    } catch (error) {
      console.log(error);
      success = false;
      next(error)
    }
  },

  createMovie: async (req, res, next) => {
    console.log(req.body);
    let movie;
    let success = true;
    try {
      movie = await Movie.create(req.body);
      res.json({
        response: movie,
        success,
        error: null,
      });
    } catch (error) {
      console.log(error);
      success = false;
    }
  },

  getOneMovie: async (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    let movie;
    let success = true;
    try {
      movie = await Movie.findById(id);
      console.log(movie)
      res.json({
        response: movie,
        success,
        error: null,
      });
    } catch (error) {
      res.json({
        response: error,
        success: false,
        error: error,
       
      });
       console.log(error)
    }
  },
};

export default moviesController;
