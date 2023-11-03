import { Router } from "express";
import moviesControllers from "../controllers/moviesControllers.js";
const { getAllMovies, getOneMovie, createMovie } = moviesControllers;

const moviesRouter = Router()

moviesRouter.get("/", getAllMovies);
moviesRouter.get("/:id", getOneMovie);

moviesRouter.post("/", createMovie);

export default moviesRouter;