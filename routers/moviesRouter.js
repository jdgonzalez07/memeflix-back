import { Router } from "express";
import moviesControllers from "../controllers/moviesControllers.js";
const { getAllMovies, getOneMovie, createMovie, updateMovie, deleteMovie } =
  moviesControllers;

const moviesRouter = Router();

moviesRouter.get("/", getAllMovies);
moviesRouter.get("/:id", getOneMovie);

moviesRouter.post("/", createMovie);
moviesRouter.delete("/:id", deleteMovie);
moviesRouter.put("/:id", updateMovie);

export default moviesRouter;
