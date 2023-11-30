import { Movie } from "../Models/Movie.js";

const moviesController = {
  getAllMovies: async (req, res, next) => {
    console.log(req.body);
    let movies;
    let success = true;
    try {
      movies = await Movie.find();
      res.json({
        response: movies,
        success,
        error: null,
      });
    } catch (error) {
      console.log(error);
      success = false;
      next(error);
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
    console.log(id);
    let movie;
    let success = true;
    try {
      movie = await Movie.findById(id);
      console.log(movie);
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
      console.log(error);
    }
  },

  updateMovie: async (req, res, next) => {
    const {id} = req.params;
    console.log(id)
    let updatedMovie;
    let success = true;
    try {
      updatedMovie = await Movie.findOneAndUpdate({_id:id}, req.body, {new:true})
      res.json({
        response:updatedMovie,
        success,
        error:null
      })
    } catch (error) {
      console.log(error)
      success= false;  
      next(error)
    }


  },

  deleteMovie: async (req, res, next) => {
    const {id} = req.params
    console.log(id)
    let deletedMovie;
    let success = true;
    try {
      deletedMovie = await Movie.findOneAndDelete({_id:id})
      res.json({
        response:deletedMovie,
        success,
        error:null
      })
    } catch (error) {
      console.log(error)
      success = false;
      next(error)
      
    }
  },
};

export default moviesController;
