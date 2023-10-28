const moviesController = {
  getAllMovies: (req, res, next) => {
    res.json({
      response: "photos",
      success: true,
      error: null,
    });
  },
};

export default moviesController;