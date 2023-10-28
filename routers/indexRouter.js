import express, { Router } from "express";
import moviesControllers from "../controllers/moviesControllers.js";
const { getAllMovies } = moviesControllers;

const indexRouter = Router();

indexRouter.get("/", (req,res,next)=>{
    res.send("Estoy en /api")
})

indexRouter.get("/movies", getAllMovies )


export default indexRouter;