import  { Router } from "express";

import moviesRouter from "./moviesRouter.js";


const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  res.send("Estoy en /api");
});

indexRouter.use("/movies", moviesRouter)


export default indexRouter;
